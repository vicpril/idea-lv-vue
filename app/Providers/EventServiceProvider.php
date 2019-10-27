<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        // 'App\Events\Event' => [
        //     'App\Listeners\EventListener',
        // ],
    ];

    /**
     * The subscriber classes to register.
     *
     * @var array
     */
    protected $subscribe = [
        'App\Listeners\UserEventSubscriber',
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }

    /**
     * "ctf0/package-changelog".
     */
    public static function postAutoloadDump(\Composer\Script\Event $event)
    {
        if (class_exists('ctf0\PackageChangeLog\Ops')) {
            return \ctf0\PackageChangeLog\Ops::postAutoloadDump($event);
        }
    }
}
