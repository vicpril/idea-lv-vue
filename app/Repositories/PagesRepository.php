<?php

namespace App\Repositories;

use App\Models\Page;
use DB;
use Transliterate;

class PagesRepository extends Repository
{

    public function __construct(Page $page)
    {
        $this->model = $page;

    }

    /*
     *
     *    Get pages with conditions
     *        search in:
     *                title
     *                issue: year, tom, no, part
     *                                status: title_ru,
     *                                users: short_name
     *    For resources
     */
    public function getPagesList(\Illuminate\Http\Request $request)
    {
        $paginate = ($request->input('paginate')) ? $request->input('paginate') : false;
        $search = ($request->input('search')) ? $request->input('search') : '';
        $sortBy = ($request->input('sortBy')) ? $request->input('sortBy') : 'id';
        $orderBy = ($request->input('orderBy')) ? $request->input('orderBy') : 'asc';

        $pages_id = $this->getSortedIdArray($search, $sortBy, $orderBy);

        $pages = page::whereIn('id', $pages_id)
            ->with([
                'meta',
                'status',
            ])
            ->orderByRaw("FIELD(id, " . implode(',', $pages_id) . ")");

        if ($paginate) {
            return $pages->paginate($paginate);
        } else {
            return $pages->get();
        }

    }

    private function getSortedIdArray($search = '', $sortBy = 'title', $orderBy = 'asc')
    {
        switch ($sortBy) {
            case 'title':$sortBy = ['meta_pages.title'];
                break;
            case 'status':$sortBy = ['status.title_ru'];
                break;
            case 'updated_at':$sortBy = ['pages.updated_at'];
                break;
            default:$sortBy = ['meta_pages.title'];
                break;
        }

        $pages_id = DB::table('pages')
            ->leftjoin('meta_pages', 'pages.id', '=', 'meta_pages.page_id')
            ->leftjoin('status', 'pages.status_id', '=', 'status.id')
/*        search in:
 *                title
 */
            ->where(function ($query) use ($search) {
                $query->where('meta_pages.title', 'like', "%" . $search . "%")
                    ->orWhere('status.title_ru', 'like', "%" . $search . "%");
            });

        foreach ($sortBy as $sort) {
            $pages_id = $pages_id->orderBy($sort, $orderBy);
        }

        $pages_id = $pages_id->groupBy('pages.id')
            ->pluck('pages.id')->unique()->toArray();

        return $pages_id;
    }

    /*
     *
     *   Add new page to database
     *
     */
    public function create($data)
    {
        $alias = Transliterate::make($data['title_ru'], ['type' => 'url', 'lowercase' => true]);
        $alias = $this->getUnique($alias, 'pages', 'alias');
        $page = $this->model->create([
            'alias' => $alias,
            'template' => $data['template'],
        ]);

        $page->meta()->create([
            'lang' => 'ru',
            'on' => filter_var($data['on_ru'], FILTER_VALIDATE_BOOLEAN),
            'title' => $data['title_ru'],
            'content' => $data['content_ru'],
        ]);

        $page->meta()->create([
            'lang' => 'en',
            'on' => filter_var($data['on_en'], FILTER_VALIDATE_BOOLEAN),
            'title' => $data['title_en'],
            'content' => $data['content_en'],
        ]);

        if (filter_var($data['status'], FILTER_VALIDATE_BOOLEAN)) {
            $page->status()->associate(1);
        } else {
            $page->status()->associate(2);
        }
        $page->save();

        return [
            'status' => 'success',
            'message' => 'Новая страница добавлена',
        ];
    }

    /*
     *
     *   Update the page in database
     *
     */
    public function update(Page $page, $data)
    {
        $page->update([
            'alias' => $data['alias'],
            'template' => $data['template'],
            // 'show_top_menu' => (isset($data['show_top_menu'])) ? true : false,
            'show_top_menu' => true,
            'show_sidebar_menu' => (isset($data['show_sidebar_menu'])) ? true : false,
            'show_review_menu' => (isset($data['show_review_menu'])) ? true : false,

        ]);

        $page->ru->update([
            'lang' => 'ru',
            'on' => (isset($data['on_ru']) && $data['on_ru'] == "true") ? 1 : 0,
            'title' => $data['title_ru'] ?? '',
            'content' => $data['content_ru'] ?? '',
        ]);

        $page->en->update([
            'lang' => 'en',
            'on' => (isset($data['on_en']) && $data['on_en'] == "true") ? 1 : 0,
            'title' => $data['title_en'] ?? '',
            'content' => $data['content_en'] ?? '',
        ]);

        if (filter_var($data['status'], FILTER_VALIDATE_BOOLEAN)) {
            $page->status()->associate(1);
        } else {
            $page->status()->associate(2);
        }
        $page->save();

        $page->touch();

        return [
            'status' => 'success',
            'message' => 'Страница обновлена',
        ];
    }

    /*
     *
     *   Delete the page & meta from database
     *
     */

    public function deletePage(Page $page)
    {
        $page->meta->each(function ($meta) {
            $meta->delete();
        });

        if ($page->delete()) {
            return ['status' => 'success',
                'message' => 'Страница удалена'];
        } else {
            return ['status' => 'error',
                'message' => 'Что-то пошло не так'];
        }
    }

}
