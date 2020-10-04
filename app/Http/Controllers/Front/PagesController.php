<?php

namespace App\Http\Controllers\Front;

use App\Models\Page;

class PagesController extends SiteController
{
    protected $page;

    public function __construct(Page $page)
    {
        parent::__construct(
            new \App\Repositories\MenusRepository(new \App\Models\Menu),
            new \App\Repositories\TagsRepository(new \App\Models\Tag)
        );

        $this->template = 'front.index';
    }

    public function index(Page $page)
    {

        abort_if($page->status->title_en === 'private', 404);

        switch ($page->template) {
            case 'common':
                if ($page->loc->on) {
                    $this->setMenu($page);
                    $this->title = $page->loc->title;
                    $this->content = $page->loc->content;
                    return $this->renderOutput();
                } else {
                    return redirect(url("/"));
                }
                break;
            case 'mainpage':
                return redirect(url("/"));
                break;
            case 'articles':
            case 'article':
            case 'archive':
            case 'categories':
            case 'tags':
            case 'authors':
            case 'contacts':
                $this->setMenu($page);
                return redirect(url("/$page->template"));
                break;

            default:
                $this->setMenu($page);
                $this->title = $page->loc->title;
                $this->content = view("front.templates.{$page->template}_content")->render();
                return $this->renderOutput();
                break;
        }
    }

    public function get() {
        return $this->page;
    }

}
