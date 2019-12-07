<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'alias', 'role', 'password', 'orcid', 'avatar',
    ];

    protected $relation = ['meta', 'articles'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function articles()
    {
        return $this->belongsToMany('App\Models\Article', 'article_user');
    }

    public function jobs()
    {
        return $this->belongsToMany('App\Models\Job', 'user_job');
    }

    public function meta()
    {
        return $this->hasMany('App\Models\MetaUser', 'user_id');
    }

    public function redcol()
    {
        return $this->hasMany('App\Models\Redcol');
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

    public function getEditLinkAttribute()
    {
        return route('users.edit', $this->id);
    }

    public function getEmailHostAttribute()
    {
        return explode('@', $this->email)[1];
    }

    /*
     *   Filters
     */
    public function filterArticlesByStatus($status)
    {
        $this->loadMissing(['articles', 'articles.status']);
        $this->articles = $this->articles->filter(function ($article) use ($status) {
            return $article->status->title_en == $status;
        })->values();

        return $this;
    }

    public function published()
    {
        return $this->filterArticlesByStatus('public');
    }

    public function unpublished()
    {
        return $this->filterArticlesByStatus('private');
    }
}
