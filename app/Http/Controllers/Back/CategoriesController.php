<?php

namespace App\Http\Controllers\Back;

use App\Categories;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoriesController extends AdminController
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->subtitle = "Рубрики";

        $this->template = env('THEME_BACK') . '.back.categories.index';
      
        return $this->renderOutput();
    }
}