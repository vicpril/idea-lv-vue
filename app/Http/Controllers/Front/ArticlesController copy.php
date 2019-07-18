<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Models\Article;
use App\Repositories\IssuesRepository;
use App\Repositories\ArticlesRepository;

class ArticlesController extends SiteController
{
    protected $onlyPublished = true;
    //
    public function __construct(IssuesRepository $i_rep, ArticlesRepository $a_rep) 
		{
				parent::__construct(
						new \App\Repositories\MenusRepository(new \App\Models\Menu),
						new \App\Repositories\TagsRepository(new \App\Models\Tag)
				);

				$this->i_rep = $i_rep;
				$this->a_rep = $a_rep;

				$this->template = 'front.articles';

				$this->show_stol_menu = (config('app.locale') == 'ru') ? true : false;
        
		}


    /*
    *
    *  Render articles list of last Issue
    *
    */
    public function index(Request $request) {
        
        if (!$request->year || !$request->no || !$request->part) {
            return $this->redirectOnLastIssue();
        }

				$this->onlyPublished = (!auth()->guest() && auth()->user()->role == 'admin') ? false : true ;
				$this->prepareStolMenu();
			
//         $issue = $this->getIssue($request, $this->onlyPublished);
        $issue = $this->getIssue($request, false);

        $nextIssue = $this->i_rep->getNextIssue($issue);
        $prevIssue = $this->i_rep->getPrevIssue($issue);
        
        $this->title = view('front.articles_title')->with('issue', $issue)->render();

        $this->subtitle = __('Содержание тома');

        $this->vars = array_add($this->vars, 'issue', $issue);
        $this->vars = array_add($this->vars, 'nextIssue', $nextIssue);
        $this->vars = array_add($this->vars, 'prevIssue', $prevIssue);
            
    		return $this->renderOutput();
    }


    /*
    *
    *  Render current article
    *
    */
    public function show(Article $article) {
        
        if (auth()->guest() && !$article->status->type) {
            return abort(404, 'Статья не найдена');
        }
			
				$issue = $this->getIssue($request, $this->onlyPublished);
			
				$this->onlyPublished = (!auth()->guest() && auth()->user()->role == 'admin') ? false : true ;
				$this->prepareStolMenu();
        
//         $article->loadMissing([
//             'meta',
//             'users',
//             'users.meta',
//             'issue',
//             'categories',
//             'tags'
//         ]);

        $this->template = 'front.article';
        
        $this->title = view('front.articles_title')->with('issue', $article->issue)->render();

        $this->subtitle = $article->loc->title;

        $this->vars = array_add($this->vars, 'article', $article);
			
				$prevArticle = ($article->order > 1) 
						? $article->issue->articles[$article->order - 1]
						: false ;
				$this->vars = array_add($this->vars, 'prevArticle', $prevArticle);
			
				$nextArticle = ($article->order < count($article->issue->articles)) 
						? $article->issue->articles[$article->order + 1]
						: false ;
				$this->vars = array_add($this->vars, 'nextArticle', $nextArticle);

        return $this->renderOutput();
    }


    /*
    *
    *  Check last Issue and rerirect if it isset
    *
    */
    public function redirectOnLastIssue() {
            
			$issue = $this->i_rep->oneLastByStatus('public');
      
			if ($issue) {
				return redirect()->route('articles', [
																				'year' => $issue->year,
																				'no' => $issue->no,
																				'part' => $issue->part,
																		]);
				} else {
						return die('Записей нет');
				}
    }


    public function getArticle($alias) {
        
        $article = $this->a_rep->one($alias, app()->getLocale());

        return $article;
    }

    public function getArticleByStatus($alias) {
        
        $article = $this->a_rep->one($alias, 'public');

        return $article;
    }

	/*
	*
	*/
    private function getIssue(Request $request, $articleStatus = '*') {
        
        $issue = $this->i_rep->one($request->all(), app()->getLocale());

				if ($issue) {
            $issue = $this->i_rep->getIssuesByArticleStatus($articleStatus, $issue);
            $issue = $this->i_rep->prepareIssue($issue);
        }

        return $issue;
    }
	
		private function prepareStolMenu () {
			
				if($this->show_stol_menu) {
						$stol_menu = $this->a_rep->getArticles($this->onlyPublished, $stol = true)->take(4);
						$this->vars = array_add($this->vars, 'stol_menu', $stol_menu);
				} else {
						$this->vars = array_add($this->vars, 'stol_menu', []);
				}
			
		}





    // /***********************************
    // *              FOR TEST
    // ***********************************/

    // public function renderIssues($issues = FALSE) {
    //     if ($issues) {
    //         if (is_a($issues, 'Illuminate\Database\Eloquent\Model')) {
    //             $this->renderIssue($issues);
    //         } 
    //         if (is_a($issues, 'Illuminate\Database\Eloquent\Collection')) {
    //             $issues->each(function($issue){
    //                 $this->renderIssue($issue);
    //             });
    //         }
            
    //     }
    // }

    // public function renderIssue($issue = FALSE) {
    //     if ($issue) {
    //         foreach ($issue->articles as $article) {
    //             echo $issue->id . ' - ' ;
    //             echo $issue->year . ' - ' ;
    //             echo $issue->no . ' - ' ;
    //             echo $issue->part . ' - ' ;
    //             echo $article->id . ' - ' ;
    //             echo '<b>'.$article->title . '</b> - ' 
    //                 . $article->status->name . ' - ' ;

    //             foreach ($article->users as $user) {
    //                 echo '<i>'.$user->name  . '</i> - ';
    //             }

    //             foreach ($article->tags as $tag) {
    //                 echo $tag->name  . ' - ';
    //             }

    //             foreach ($article->categories as $category) {
    //                 echo $category->name  . ' - ';
    //             }

    //             echo '<br />';
    //         }
    //     }
    // }

    

}
