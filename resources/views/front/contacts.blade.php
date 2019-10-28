@extends('front.index')

@section('content')
		{!! $content !!}

		@if(session('message'))
				<div class="alert alert-success" role="alert">
					{{ session('message') }}
				</div>
		@endif

		<div class="jumbotron mt-4 p-3 p-lg-4">
			<h3 class="text-center">@lang('Вы можете отправить нам письмо прямо сейчас!')</h3>
			<p class="lead"><small>@lang('Вопросы и комментарии приветствуются')<br>
				* @lang('поля обязательные для заполнения')</small></p>



			<form method="POST" action="{{route('contacts.send')}}">
				{{csrf_field()}}
				<div class="form-group">
					<label for="name">@lang('Ваше имя'):*</label>
					<input type="text" class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" id="name" name="name">
					<div class="invalid-feedback">
						{{$errors->first('name')}}
					</div>
				</div>
				<div class="form-group">
					<label for="email">@lang('Адрес электронной почты'):*</label>
					<input type="email" class="form-control {{ $errors->has('email') ? 'is-invalid' : '' }}" id="email" placeholder="name@example.com" name="email">
					<div class="invalid-feedback">
						{{$errors->first('email')}}
					</div>
				</div>
				<div class="form-group">
					<label for="subject">@lang('Тема сообщения'):*</label>
					<input type="subject" class="form-control {{ $errors->has('subject') ? 'is-invalid' : '' }}" id="subject" name="subject">
					<div class="invalid-feedback">
						{{$errors->first('subject')}}
					</div>
				</div>
				<div class="form-group">
					<label for="content">@lang('Текст сообщения'):*</label>
					<textarea class="form-control {{ $errors->has('content') ? 'is-invalid' : '' }}" id="content" rows="3" name="content"></textarea>
					<div class="invalid-feedback">
						{{$errors->first('content')}}
					</div>
				</div>
				<div class="form-group">
				 {!! NoCaptcha::display() !!}
					@if ($errors->has('g-recaptcha-response'))
							<span class="help-block">
									<strong>{{ $errors->first('g-recaptcha-response') }}</strong>
							</span>
					@endif

				</div>

				<button type="submit" class="btn btn-primary">@lang('Отправить')</button>
			</form>
		</div>
@endsection

@push('scripts')
	 {!! NoCaptcha::renderJs() !!}
@endpush
