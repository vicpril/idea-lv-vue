<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

    protected $table = 'articles';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'alias',
        'udk',
        'doi',
        'status_id',
        'issue_id',
        'date_arrival',
        'date_review',
        'applications',
        'finance',
        'file_audio',
        'stol',
    ];

    protected $dates = [
        'date_arrival',
        'date_review',
    ];

    public function status()
    {
        return $this->belongsTo('App\Models\Status');
    }

    public function issue()
    {
        return $this->belongsTo('App\Models\Issue');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag', 'article_tag');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category', 'article_category');
    }

    public function users()
    {
        return $this->belongsToMany('App\Models\User', 'article_user');
    }

    public function meta()
    {
        return $this->hasMany('App\Models\MetaArticle');
    }

    public function users_id()
    {
        return $this->users->map(function ($user) {
            return $user->id;
        })->toArray();
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

    public function getCategoryAttribute()
    {
        return $this->categories()->first();
    }

    /**
     * @return ruFile || null if Ru locale
     * @return locFile || or ruFile || null if En locale
     */
    public function getFileAttribute()
    {
        return ($this->loc->file) ?: ($this->ru->file) ?: null ;
    }

    /*
     *   Scopes
     */

    public function scopeByTag($query, $alias)
    {
        return self::tags()->where('alias', $alias);
    }

    /*
     *   Get links
     */
    public function getEditLinkAttribute()
    {
        return route('articles.edit', $this->id);
    }

    public function getLinkAttribute()
    {
        return route('article', $this->alias);
    }

    /*
     *   Get pages from doi
     */
    public function getDoiPagesAttribute()
    {
        $doi_str = explode('/', $this->doi);
        $doi_str[1] = (isset($doi_str[1])) ? explode('-', $doi_str[1]) : '';

        $result['first'] = $doi_str[1][4] ?? ''; // первая страница первой статьи
        $result['last'] = $doi_str[1][5] ?? ''; // последняя страница последней статьи

        return ($result) ?: '';
    }

    public function getDoiFirstPageAttribute()
    {
        return $this->doiPages['first'];
    }

    public function getDoiLastPageAttribute()
    {
        return $this->doiPages['last'];
    }

}
