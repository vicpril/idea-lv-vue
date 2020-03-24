<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MetaArticle extends Model
{
    //
    protected $table = 'meta_articles';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'lang',
        'title',
        'text',
        'annotation',
        'keywords',
        'file',
        'bibliography',
    ];

    public $timestamps = false;

    public function article()
    {
        return $this->belongsTo('App\Models\Article');
    }

    // public function file()
    // {
    //     return $this->belongsTo('App\Models\File');
    // }

    public function getFileTitleAttribute()
    {
        return view("front.components.file_title_$this->lang")->with('article', $this->article)->render();
    }

    public function getFileNameAttribute()
    {
        if ($this->file) {
            $tmp = explode('/', $this->file);
            return end($tmp);
        } 
        return null;
    }

}
