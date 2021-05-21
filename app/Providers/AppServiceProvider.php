<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Url;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Localization Carbon
        \Carbon\Carbon::setLocale(config('app.locale'));
        setLocale(LC_TIME, (config('app.locale') == 'ru') ? 'ru_RU.UTF-8' : 'en_US.UTF-8');

        //for watching SQL-query
        // DB::listen(function ($query) {
        // dump($query->sql) ;
        // dump(request()->session());
        // dump(app()->getLocale());
        // });

        Blade::component('back.components.alert', 'alert');

        // create custom directive for blade: @set($i,10)
        Blade::directive('set', function ($exp) {
            list($name, $val) = explode(',', $exp);
            return "<?php $name = $val; ?>";
        });

        Blade::directive('articleDate', function ($expression) {
            return "<?php echo ($expression)->format('d.m.Y'); ?>";
        });

        Blade::directive('sentenceCase', function ($expression) {
            return ucfirst($expression);
        });

        Blade::if('admin', function () {
            return !auth()->guest() && auth()->user()->role === 'admin';
        });

        URL::forceScheme('https');

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

    }
}
