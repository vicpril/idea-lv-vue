<h3>Кто-то отправил Вам письмо из контактной формы научного журнала журнала "Идеи и Идеалы"</h3>

<strong>Отправитель: </strong>{{ $request->name }}
<br>
<strong>Email отправителя: </strong>{{ $request->email }}
<br>
<strong>Тема письма: </strong>{{ $request->subject }}
<br>
<strong>Содержание:</strong><br>
{{ $request->content }}
