<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $table = 'pages';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'alias',
        'status_id',
        'template',
        "show_top_menu",
        "show_sidebar_menu",
        "show_review_menu",
        "show_tag_menu",
    ];

    protected $casts = [
        "show_top_menu" => "boolean",
        "show_sidebar_menu" => "boolean",
        "show_review_menu" => "boolean",
        "show_tag_menu" => "boolean",
    ];

    public function status()
    {
        return $this->belongsTo('App\Models\Status');
    }

    public function meta()
    {
        return $this->hasMany('App\Models\MetaPage', 'page_id');
    }

    /*
     *   Locale getters
     */

    public function getLocAttribute()
    {
        return $this->meta->where('lang', app()->getLocale())->first();
    }

    public function getRuAttribute()
    {
        return $this->meta->where('lang', 'ru')->first();
    }

    public function getEnAttribute()
    {
        return $this->meta->where('lang', 'en')->first();
    }

    /*
     *   Get links
     */
    public function getEditLinkAttribute()
    {
        return route('pages.edit', $this->id);
    }

    public function getGetLinkAttribute()
    {
        return route('page', $this->alias);
    }

}
