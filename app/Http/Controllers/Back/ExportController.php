<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Http\Requests\ExportRequest;
use App\Repositories\Export\ExportRepositoryInterface;
use Route;

class ExportController extends Controller
{
    protected $repository;

    public function __construct(ExportRepositoryInterface $rep)
    {
        $this->repository = $rep;
    }

    public function index(ExportRequest $request)
    {
        $this->repository->initiate(
            Route::current()->parameter('action'),
            $request->except('_token')
        )
            ->contentPrepare()
            ->createFile()
            ->downloadFile();
    }

}
