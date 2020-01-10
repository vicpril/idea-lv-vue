<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use App\Models\WP\Post as wpPost;
use App\Models\Article;
use Corcel\Model\Taxonomy as cTaxonomy;

class OldRouteController extends SiteController
{
    public function fixRoute(String $cat, String $slug) {
        // dump($cat);
        // dump($slug);

        // $post = wpPost::where('slug', $slug)
        //     ->first();
        $post = wpPost::type('post')->slug($slug)->first();

        // dump($post->ID);

        // $tax = wpPost::taxonomy('post_translations', "$post->ID")->get();

        $tax = cTaxonomy::where('taxonomy', 'post_translations')
                            ->where('description', 'LIKE',"%i:$post->ID;%")
                            ->first()
                            ->description;

        $tax_ru = unserialize($tax)['ru'];

        // dump($tax_ru);

        $post_ru = wpPost::find($tax_ru);

        // dump($post_ru->slug);

        $search = ['x', 'j'];
        $replace = ['h', 'y'];

        $rightAlias = str_replace($search, $replace, $post_ru->slug);

        // dump($rightAlias);

        $article = Article::where('alias', $rightAlias)->first();

        // dump(route('article', $rightAlias));

        // dump($article);

        if ($article) {
            return redirect()->route('article', $rightAlias);
        } else {
            return redirect('http://old-'. config('app.url') . $_SERVER['REQUEST_URI']);
        }
        


        // return redirect()->route('article', $rightAlias);
    }

}
