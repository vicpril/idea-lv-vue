<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MetaUser extends Model
{
    //
    protected $table = 'meta_users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'lang',
        'full_name',
        'short_name',
        'first_name',
        'last_name',
        'patronymic',
        'initials',
        'degree',
        'post',
        'redcol_info',
        'jobs',
        'description',
    ];

    public $timestamps = false;

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'jobs' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

}
