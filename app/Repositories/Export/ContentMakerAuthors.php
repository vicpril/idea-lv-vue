<?php

namespace App\Repositories\Export;

use Blade;
use App\Repositories\Export\ContentMaker;
use App\Models\User;


class ContentMakerAuthors extends ContentMaker
{
    protected $title;
    protected $issn;
    protected $no;
    protected $full_no;   #mag_f_no
    protected $year;      #mag_yearno
    protected $tom;       #mag_vol
    protected $part;      #mag_tom       
    protected $firstPage; #mag_f_page;
    protected $lastPage;  #mag_l_page;
  
    protected $articles;
  
    protected $users;
  
    ## title;
    ## notice;
    ## udk;
    ## doi;
    ## keywords;
    ## lit;
    ## date_arrival;
    ## cat_en;
    ## title_en;
    ## notice_en;
    ## key_en;
    ## fin;
    ## text;
    ## f_page;
    ## l_page;
  
    public function __construct(Array $data) 
    {
        parent:: __construct($data);
      
        $this->users = User::with('meta')
          ->whereHas('articles', function ($article) use ($data) {
            $article->whereIn('article_id', $data['articles']);
        })->get()
          ->sortBy(function($user) {
            return $user->ru->full_name;
          })
//           ->map(function($user) {
//             return $user->ru->full_name;
//           })
          ->values();
          
    }  
  
    public function getContent() {
        Blade::include('back.export.authors._header', 'header');
        Blade::include('back.export.authors._footer', 'footer');

        return view('back.export.authors.index')->with($this->getProperties())->render();
    }
  
}

?>