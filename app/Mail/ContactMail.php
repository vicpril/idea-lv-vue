<?php

namespace App\Mail;

use App\Http\Requests\EmailRequest;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(EmailRequest $request)
    {
        $this->request = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(env('MAIL_ADDRESS'), 'Научный журнал "Идеи и Идеалы"')
            ->to(User::where('alias', 'admin')->first()->email)
            ->subject('Письмо из контактной формы')
            ->view('email.contactmail')
            ->with('request', $this->request);
    }
}
