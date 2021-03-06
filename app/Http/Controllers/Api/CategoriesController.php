<?php

namespace App\Http\Controllers\Api;

// use DB;
// use Route;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Repositories\CategoriesRepository;

class CategoriesController extends Controller
{
    protected $repository;
  
    public function __construct (CategoriesRepository $c_rep) {
      
      $this->repository = $c_rep;
    }
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) 
    {
        $cats = $this->repository->getCategoriesList($request);
        return $cats;
    }
  
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request) {
        $result = $this->repository->create($request->except('_token', '_method'));
        return response()->json($result);
    }
  
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $cat) {
        $result = $this->repository->update($cat, $request->except('_token', '_method'));
        return response()->json($result);
    }
  
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $cat) {
        $this->middleware('auth:api');
        $result = $this->repository->deleteCategory($cat);

        if (is_array($result)) {
            return response()->json($result);
        }
    }
}
