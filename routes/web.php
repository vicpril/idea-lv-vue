<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

/** PAGES THAT SHOULD NOT BE LOCALIZED **/

// Auth::routes();

Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::match(['get', 'post'], 'logout', 'Auth\LoginController@logout')->name('logout');

Route::prefix('admin')->namespace('Back')->group(function () {

    Route::middleware('redac')->group(function () {

        Route::name('admin')->get('/', 'AdminController@dashboard');

        Route::resource('users', 'UsersController')->except(['show']);
        Route::resource('articles', 'ArticlesController')->except(['show']);
        Route::resource('issues', 'IssuesController')->except(['show', 'update']);
        Route::resource('categories', 'CategoriesController')->only(['index']);
        Route::resource('tags', 'TagsController')->only(['index']);
        Route::resource('redcols', 'RedcolsController')->only(['index']);

        //pages and menus
        Route::resource('pages', 'PagesController')->except(['show']);
        Route::resource('menus', 'MenusController')->only(['index']);

        //backup
        Route::get('backup', 'BackupController')->name('backup');
        Route::get('backup/download/{title}', 'BackupController@download')->name('backup_download');

        // export
        Route::post('export/{action}', 'ExportController@index')->name('export')->where('action', 'article|authors|content|emails|rinc');

    });

    Route::middleware(['auth', 'admin'])->group(function () {
        Route::resource('articles', 'ArticlesController');

    });
});

/** PAGES THAT SHOULD BE LOCALIZED **/

Route::group(
    [
        'namespace' => 'Front',
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => ['localeSessionRedirect', 'localizationRedirect', 'localeViewPath'],
    ],
    function () {
        /** ADD ALL LOCALIZED ROUTES INSIDE THIS GROUP **/
        Route::name('home')->get('/', 'IndexController@index');

        Route::name('articles')->get('articles', 'ArticlesController@index');
        Route::name('article')->get('articles/{articleAlias}', 'ArticlesController@show');
        Route::name('archive')->get('/archive', 'ArticlesController@archive');

        Route::name('search')->get('/search', 'ArticlesController@search');

        Route::resource('categories', 'CategoriesController')->only(['show'])->parameters(['categories' => 'categoryAlias']);
        Route::resource('tags', 'TagsController')->only(['show'])->parameters(['tags' => 'tagAlias']);

        Route::resource('authors', 'AuthorsController', [
            'only' => ['index', 'show'],
            'parameters' => ['authors' => 'authorAlias'],
        ]);

        Route::name('redkollegiya')->get('/redkollegiya', 'AuthorsController@redcols');
        Route::name('contacts')->get('/contacts', 'ContactsController@index');
        Route::name('contacts.send')->post('/contacts', 'ContactsController@sendEmail');

        Route::name('club')->get('/diskussionnye-cluby', 'ArticlesController@club');

        //route for importing DB from Wordpress
        // Route::name('corsel')->get('spa', 'SpaController@index');

        Route::name('page')->get('{pageAlias}', 'PagesController@index');

        /**
         * Fix links on old site version
         */
        // Route::name('old-article')->get('{cat}/{slug}', 'OldRouteController@fixRoute');
        Route::name('old-article')->get('{cat}/{slug}', function () {
            return redirect('https://old-'. $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
        });

    });
