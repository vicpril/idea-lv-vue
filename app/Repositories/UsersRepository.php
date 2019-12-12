<?php

namespace App\Repositories;

use App\Models\User;
use DB;
use Transliterate;

class UsersRepository extends Repository
{

    public function __construct(User $user)
    {
        $this->model = $user;

    }

    /*
     *    Get one user by alias
     *          load  'jobs'
     *                'articles' -> 'status',
     *                              'issue'
     */
    public function one($alias)
    {

        $result = parent::one($alias);

        if ($result) {
            $result->load('jobs', 'articles');
            $result->articles->load('status', 'issue');

        }

        return $result;
    }

    /*
     *    Get all users with select
     *          load  'meta_users',
     *                'articles'
     */
    public function get(
        $select = '*',
        $where = false,
        $orderBy = false,
        $pagination = ''
    ) {
        $result = parent::get(
            $select = $select,
            $where = $where,
            $orderBy = $orderBy,
            $pagination = $pagination
        );
        if ($result) {
            $result->load('meta');
            $result->load('articles');
        }

        return $result;
    }

    /*
     *
     *    Get users with conditions
     *        search in:
     *                 full_name
     *                 email
     *    For resources
     */
    public function getUsersList(\Illuminate\Http\Request $request)
    {
        $paginate = ($request->input('paginate')) ? $request->input('paginate') : '';
        $search = ($request->input('search')) ? $request->input('search') : '';
        $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : 'id';
        $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : 'asc';

        $users_id = $this->getSortedIdArray($search, $sortBy, $orderBy);

        $users = User::whereIn('id', $users_id)
            ->with(['meta', 'articles'])
            ->orderByRaw("FIELD(id, " . implode(",", $users_id) . ")")
            ->paginate($paginate);

        return $users;

    }

    private function getSortedIdArray($search = '', $sortBy = 'full_name', $orderBy = 'asc', $role = 'author')
    {
        switch ($sortBy) {
            // sort by atricle_user table
            case 'articles_count':
                $users_id_articles_sorted = DB::table('users')
                    ->leftjoin("article_user as a", 'users.id', '=', 'a.user_id')
                    ->where('users.role', $role)
                    ->selectRaw("users.id, count(a.user_id) as $sortBy")
                    ->orderBy($sortBy, $orderBy)
                    ->groupBy('users.id')
                    ->pluck('users.id')->unique()->toArray();

                $users_id_searched = DB::table('users')
                    ->leftjoin('meta_users', 'users.id', '=', 'meta_users.user_id')
                    ->where('users.role', $role)
                    ->where(function ($query) use ($search) {
                        $query->where('email', 'like', "%" . $search . "%")
                            ->orWhere('full_name', 'like', "%" . $search . "%");
                    })
                    ->groupBy('users.id')
                    ->pluck('users.id')->unique()->toArray();

                $users_id = array_intersect($users_id_articles_sorted, $users_id_searched);

                break;

            // sort by users, meta_users tables
            default:
                $users_id = DB::table('users')
                    ->leftjoin('meta_users', 'users.id', '=', 'meta_users.user_id')
                    ->where('users.role', $role)
                    ->where(function ($query) use ($search) {
                        $query->where('email', 'like', "%" . $search . "%")
                            ->orWhere('full_name', 'like', "%" . $search . "%");
                    })
                    ->orderBy($sortBy, $orderBy)
                    ->groupBy('users.id')
                    ->pluck('users.id')->unique()->toArray();
                break;
        }
        return $users_id;
    }

    /*
     *
     *    Get all users with meta mapped by Locale
     *
     */
    public function all($relationsip = [])
    {
        $result = parent::all();
        $result->loadMissing($relationsip);
        return $result;
    }

    public function filerUserArticlesByStatus(User $user, $status = '*')
    {
        if ($status && $status !== '*') {
            $user->articles = $user->articles->filter(function ($article) use ($status) {
                return $article->status->name === $status;
            });
        }
        return $user;
    }

    /*
     *
     *   Add new user to database
     *
     */
    public function create($data)
    {
        $alias = $data['alias'] ?: Transliterate::make($data['full_name'], ['type' => 'url', 'lowercase' => true]);
        $alias = $this->getUnique($alias, 'users', 'alias');
        $user = $this->model->make([
            'alias' => $alias,
            'email' => $data['email'],
            // 'password' => bcrypt('123'),
            'role' => 'author',
            'orcid' => (isset($data['orcid'])) ? $data['orcid'] : null,
            'avatar' => (isset($data['avatar'])) ? $data['avatar'] : null,
        ]);

        $user->save();

        $user->meta()->create([
            'lang' => 'ru',
            'full_name' => $data['full_name'],
            'first_name' => $data['first_name_ru'],
            'last_name' => $data['last_name_ru'],
            'patronymic' => $data['patronymic_ru'],
            'initials' => $data['initials_ru'],
            'short_name' => $data['short_name_ru'],
            'degree' => $data['degree_ru'],
            'redcol_info' => $data['redcol_info_ru'],
            'jobs' => (isset($data['jobs_ru'])) ? $data['jobs_ru'] : [],
            'description' => (isset($data['description_ru'])) ? $data['description_ru'] : '',
        ]);

        $en_name = $data['last_name_en'];
        $en_name .= ($data['first_name_en']) ? " " . $data['first_name_en'] : "";
        $en_name .= ($data['patronymic_en']) ? " " . $data['patronymic_en'] : "";

        $user->meta()->create([
            'lang' => 'en',
            'full_name' => $en_name,
            'first_name' => $data['first_name_en'],
            'last_name' => $data['last_name_en'],
            'patronymic' => $data['patronymic_en'],
            'initials' => $data['initials_en'],
            'short_name' => $data['short_name_en'],
            'degree' => $data['degree_en'],
            'redcol_info' => $data['redcol_info_en'],
            'jobs' => (isset($data['jobs_en'])) ? $data['jobs_en'] : [],
            'description' => (isset($data['description_en'])) ? $data['description_en'] : '',
        ]);

        return [
            'status' => 'success',
            'message' => 'Новый автор добавлен',
        ];
    }

    /*
     *
     *   Update user in database
     *
     */
    public function update(User $user, $data)
    {
//         $alias = $data['alias'] ?: Transliterate::make($data['full_name'], ['type' => 'url', 'lowercase' => true]);
        $user->update([
//             'alias' => $alias,
            'email' => $data['email'],
            // 'password' => bcrypt('123'),
            'orcid' => (isset($data['orcid'])) ? $data['orcid'] : null,
            'avatar' => (isset($data['avatar'])) ? $data['avatar'] : null,
        ]);

        $user->ru->update([
            'lang' => 'ru',
            'full_name' => $data['full_name'],
            'first_name' => $data['first_name_ru'],
            'last_name' => $data['last_name_ru'],
            'patronymic' => $data['patronymic_ru'],
            'initials' => $data['initials_ru'],
            'short_name' => $data['short_name_ru'],
            'degree' => $data['degree_ru'],
            'redcol_info' => $data['redcol_info_ru'],
            'jobs' => (isset($data['jobs_ru'])) ? $data['jobs_ru'] : [],
            'description' => $data['description_ru'],
        ]);

        $en_name = $data['last_name_en'];
        $en_name .= ($data['first_name_en']) ? " " . $data['first_name_en'] : "";
        $en_name .= ($data['patronymic_en']) ? " " . $data['patronymic_en'] : "";

        $user->en->update([
            'lang' => 'en',
            'full_name' => $en_name,
            'first_name' => $data['first_name_en'],
            'last_name' => $data['last_name_en'],
            'patronymic' => $data['patronymic_en'],
            'initials' => $data['initials_en'],
            'short_name' => $data['short_name_en'],
            'degree' => $data['degree_en'],
            'redcol_info' => $data['redcol_info_en'],
            'jobs' => (isset($data['jobs_en'])) ? $data['jobs_en'] : [],
            'description' => $data['description_en'],
        ]);

        return [
            'status' => 'success',
            'message' => 'Данные автора обновлены',
        ];
    }

    /*
     *
     *   Remove user from database
     *           relations will be dissociate
     */
    public function deleteUser($user)
    {

        $user->articles()->detach();

        if ($user->delete()) {
            return ['status' => 'success',
                'message' => 'Пользователь удален'];
        } else {
            return ['status' => 'error',
                'message' => 'Что-то пошло не так'];
        }
    }

    /*
     *
     *    Get list all Authors
     *
     */

    public function getAuthors()
    {

        $users = $this->model->join('meta_users', 'users.id', '=', 'meta_users.user_id')
            ->where('users.role', 'author')
            ->where('meta_users.lang', 'ru')
            ->orderBy('meta_users.short_name', 'asc')
            ->select('users.*')
            ->get();
        $users->loadMissing(['meta']);
        return $users;
    }

}
