<?php

namespace App\Listeners;

use App\Http\Controllers\Back\UsersController;

class UserEventSubscriber
{
    private $u_controller;

    public function __construct(UsersController $u_controller)
    {
        $this->u_controller = $u_controller;
    }

    /**
     * Handle user login events.
     */
    public function handleUserLogin($event)
    {
        $this->u_controller->updateApiToken($event->user);
    }

    /**
     * Handle user logout events.
     */
    public function handleUserLogout($event)
    {
        $this->u_controller->updateApiToken($event->user);
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher  $events
     */
    public function subscribe($events)
    {
        $events->listen(
            'Illuminate\Auth\Events\Login',
            'App\Listeners\UserEventSubscriber@handleUserLogin'
        );

        $events->listen(
            'Illuminate\Auth\Events\Logout',
            'App\Listeners\UserEventSubscriber@handleUserLogout'
        );
    }
}
