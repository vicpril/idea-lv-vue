<?php

namespace App\Repositories\Export;

use App\Models\Issue;
use App\Models\Article;
use App\Repositories\Export\ContentMakerInterface;

abstract class ContentMaker implements ContentMakerInterface 
{
    protected $issue;
    protected $articles;
    protected $email_on;

    public function __construct(Array $data) {
        $this->issue = Issue::find( $data['issue'] );
      
        $this->no = $this->issue->no;
        $this->full_no = $this->issue->full_no;
        $this->year = $this->issue->year;
        $this->tom = $this->issue->tom;
        $this->part = $this->issue->part;
      
        $this->articles = Article::find( $data['articles'] )
                                 ->sortBy(function($article) use ($data) {
                                      return array_search($article->id, $data['articles']);
                                  })
                                  ->load('meta')
                                  ->values();
    }
  
    public static function create($action, $data) 
    {
        $class = "App\Repositories\Export\ContentMaker" . ucfirst($action);
      
        return new $class($data);
    }
  
    public function getContent() {}
  
  
    protected function getProperties() {
        return get_object_vars($this);
    }
  
}

?>