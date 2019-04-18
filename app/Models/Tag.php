<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
   	protected $fillable = [
			'title_ru', 'title_en', 'alias'
		]; 
		
		// thouch culumn `used_at`
		public function touchUsed()
    {
        $this->used_at = $this->freshTimestamp();
        return ($this->save()) ? $this : false;
    }
	
    public function articles() {
    	return $this->belongsToMany('App\Models\Article', 'article_tag');
    }
	

    public function getLocAttribute() {
				switch (app()->getLocale()) {
					case 'ru': return $this->title_ru;
					case 'en': return $this->title_en;
				}
    }

    public function getRuAttribute() {
        return $this->title_ru;
    }

    public function getEnAttribute() {
        return $this->title_en;
    }
}
