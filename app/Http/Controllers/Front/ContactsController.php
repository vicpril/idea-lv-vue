<?php

namespace App\Http\Controllers\Front;

use App\Http\Requests\EmailRequest;
use App\Mail\ContactMail;
use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactsController extends SiteController
{
    public function __construct()
    {
        parent::__construct(
            new \App\Repositories\MenusRepository(new \App\Models\Menu),
            new \App\Repositories\TagsRepository(new \App\Models\Tag)
        );

        $this->template = 'front.contacts';
    }

    public function index(Request $request)
    {
        $page = Page::where('template', 'contacts')->first();

        $this->setMenu($page);

        $this->title = $page->loc->title;

        $this->content = $page->loc->content;

        return $this->renderOutput();
    }

    public function sendEmail(EmailRequest $request)
    {
        Mail::send(new ContactMail($request));

        return redirect(route('contacts'))->with(['message' => __('Сообщение отправлено')]);
    }

}
