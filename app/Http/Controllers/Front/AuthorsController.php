<?php

namespace App\Http\Controllers\Front;

use App\Models\User;
use App\Repositories\ArticlesRepository;
use App\Repositories\RedcolsRepository;
use App\Repositories\UsersRepository;
use App\Models\Page;
use Config;


class AuthorsController extends SiteController
{
    public function __construct(ArticlesRepository $a_rep, UsersRepository $u_rep, RedcolsRepository $rc_rep)
    {
        parent::__construct(
            new \App\Repositories\MenusRepository(new \App\Models\Menu),
            new \App\Repositories\TagsRepository(new \App\Models\Tag)
        );

        $this->a_rep = $a_rep;
        $this->u_rep = $u_rep;
        $this->rc_rep = $rc_rep;

        $this->show_stol_menu = (config('app.locale') == 'ru') ? true : false;

    }

    public function index()
    {
        $page = Page::where('template', 'authors')->first();

        $this->setMenu($page);

        $this->setStatus();

        $this->prepareStolMenu();

        $this->template = 'front.authors';

        $this->title = __("Наши авторы");

        $users = $this->getAuthors(true);

        $this->vars = array_add($this->vars, 'userGroups', $users);

        return $this->renderOutput();
    }

    public function show(User $user)
    {

        $this->setStatus();

        $this->prepareStolMenu();

        $this->template = 'front.author';

        $user->loadMissing([
            'meta',
            'articles',
            'articles.meta',
            'articles.status',
            'articles.issue',
        ]);

        $this->title = __("Информация об авторе");

        $this->subtitle = $user->loc->full_name;

        $user = ($this->onlyPublished) ? $user->published() : $user;

        $user->articles = $user->articles->sortByDesc(function ($a) {
            return $a->issue->year;
        });

        $this->vars = array_add($this->vars, 'user', $user);

        return $this->renderOutput();
    }

    public function redcols()
    {
        $page = Page::where('template', 'redkollegiya')->first();

        $this->setMenu($page);

        $this->setStatus();

        $this->prepareStolMenu();

        $this->template = 'front.redcols';

        $this->title = __("Редколлегия и редсовет");

        $redcols = $this->rc_rep->all()->sortBy('position');
        $redcols->loadMissing([
            'user',
            'user.meta',
        ]);

        $redcols = $redcols->mapToGroups(function ($item) {
            return [$item->type => $item];
        });

        $this->vars = array_add($this->vars, 'redcols', $redcols);

        return $this->renderOutput();
    }

    public function getAuthor($alias)
    {
        $user = $this->u_rep->one($alias);
        $user = $this->u_rep->filerUserArticlesByStatus($user, 'public');
        return $user;
    }

    public function getAuthors($groups = false)
    {
        $users = $this->u_rep->get('*', ['role', 'author']);
        $users->loadMissing(['meta']);
        $users = $users->sortBy(function ($user) {
            return $user->loc->short_name;
        });

        if ($groups) {
            $users = $users->mapToGroups(function ($user) {
                return [ucfirst(mb_substr($user->loc->short_name, 0, 1)) => $user];
            });
        }

        return $users;
    }

    private function getRedcolName($type)
    {
        switch ($type) {
            case 'red':return __('Редакция');
                break;
            case 'sovet':return __('Редакционный совет');
                break;
            case 'int-sovet':return __('Международный редакционный совет');
                break;
            default:return $type;
        }
    }
}
