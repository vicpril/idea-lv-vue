<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Repositories\MenusRepository;
use App\Repositories\TagsRepository;
use App\Repositories\PagesRepository;

class SiteController extends Controller
{
    //
    // для хранения логики (объекта класса) по работе с articles
    protected $a_rep;
    // ... menus
    protected $m_rep;
    // ... sidebar menus
    protected $s_rep;
    // ... issues
    protected $i_rep;
    // ... categories
    protected $c_rep;
    // ... users
    protected $u_rep;
    // ... tags
    protected $t_rep;
    // ... pages
    protected $p_rep;

    protected $keywords;
    protected $meta_desc;
    protected $title;
    protected $subtitle = '';
    protected $content = '';
    protected $content_footer = '';

    // шаблон (макет) отображения
    protected $template;
    // переменные для шаблона
    public $vars = array();
    // отображение статей по статусу
    protected $onlyPublished = true;
    protected $status = 'public';
    //указание на отображение меню
    protected $show_top_menu = true;
    protected $show_sidebar_menu = false;
    protected $show_review_menu = false;
    protected $show_stol_menu = false;
    protected $show_tag_menu = true;

    public function __construct(MenusRepository $m_rep, TagsRepository $t_rep)
    {
        $this->m_rep = $m_rep;
        $this->t_rep = $t_rep;
        // $this->p_rep = new \App\Repositories\PagesRepository(new \App\Models\Page);
    }

    /*
     *        Prepare variable for exception template
     */
    public function preparePage()
    {
        // $this->setMenu($this->p_rep->get());

        // TOP MENU
        if ($this->show_top_menu) {
            $menu_top = $this->m_rep->getMenu('top', app()->getLocale());
            $menu = view('front.components.navigation')->with('menu', $menu_top)->render();
            $this->vars = array_add($this->vars, 'navigation', $menu);
        } else {
            $this->vars = array_add($this->vars, 'navigation', "");
        }

        // SIDEBAR MENU
        if ($this->show_sidebar_menu) {
            $menu_sidebar = $this->m_rep->getMenu('sidebar', app()->getLocale());
            $menu = view('front.components.sidebar_menu')->with('menu', $menu_sidebar)->render();
            $this->vars = array_add($this->vars, 'sidebar_menu', $menu);
        } else {
            $this->vars = array_add($this->vars, 'sidebar_menu', "");
        }

        // REVIEW MENU
        if ($this->show_review_menu) {
            $menu_review = $this->m_rep->getMenu('review', app()->getLocale());
            $menu = view('front.components.review_menu')->with('menu', $menu_review)->render();
            $this->vars = array_add($this->vars, 'review_menu', $menu);
        } else {
            $this->vars = array_add($this->vars, 'review_menu', "");
        }


        //TAGS
        if ($this->show_tag_menu) {

            $tags = $this->t_rep->all()
                ->loadMissing('articles')
                ->sortBy("title_" . app()->getLocale());

            if ($this->onlyPublished) {
                $tags->loadMissing(['articles', 'articles.status']);
                foreach ($tags as $tag) {
                    $tag->published();
                }
            }

            $this->vars = array_add($this->vars, 'tags', $tags);
            $this->vars = array_add($this->vars, 'tag_menu', true);
        } else {
            $this->vars = array_add($this->vars, 'tag_menu', "");
        }
    }

    protected function renderOutput()
    {
        $this->preparePage();

        //CONTENT
        $this->vars = array_add($this->vars, 'title', $this->title);
        if ($this->subtitle) {
            $this->vars = array_add($this->vars, 'subtitle', $this->subtitle);
        };

        $this->vars = array_add($this->vars, 'content', $this->content);

        if ($this->content_footer) {
            $this->vars = array_add($this->vars, 'contentFooter', $this->content_footer);
        };

        return view($this->template)->with($this->vars);
    }

    protected function setMenu(Page $page)
    {

        $this->show_top_menu = $page->show_top_menu;
        $this->show_sidebar_menu = $page->show_sidebar_menu;
        $this->show_review_menu = $page->show_review_menu;
        $this->show_tag_menu = $page->show_tag_menu;

    }

    protected function setStatus()
    {
        if (!auth()->guest() && auth()->user()->role == 'admin') {
            $this->onlyPublished = false;
            $this->status = false;
        } else {
            $this->onlyPublished = true;
            $this->status = 'public';
        };
    }

    protected function prepareStolMenu()
    {

        if ($this->show_stol_menu) {
            $stol_menu = $this->a_rep->getArticles($this->onlyPublished, $stol = true)->take(4);
            $this->vars = array_add($this->vars, 'stol_menu', $stol_menu);
        } else {
            $this->vars = array_add($this->vars, 'stol_menu', []);
        }

    }

}
