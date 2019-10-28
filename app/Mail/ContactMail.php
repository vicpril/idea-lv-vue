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
        $this->email = $request;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->email->email, $this->email->name)
        // ->to(config('settings.adminEmail'))
            ->to(User::where('alias', 'admin')->first()->email)
            ->subject($this->email->subject)
            ->view('email.contactmail')->with('email', $this->email);
    }
}
