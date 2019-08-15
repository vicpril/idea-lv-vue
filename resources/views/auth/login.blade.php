@extends('auth.layout')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-5">
<div class="card p-4">
  <div class="card-body">
    <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
      @csrf
      <h1>Login</h1>
      <p class="text-muted">Sign In to your account</p>
      <div role="group" class="input-group mb-3">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="icon-user"></i>
          </div>
        </div>
        <input id="email" name="email" type="text" placeholder="Username or Email" autocomplete="username email" class="form-control form-control">
      </div>
      <div role="group" class="input-group mb-4">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="icon-lock"></i>
          </div>
        </div>
        <input id="password" type="password" placeholder="Password" autocomplete="current-password" class="form-control form-control" name="password">
      </div>
      <div class="row">
        <div class="col-6">
          <button type="submit" class="btn px-4 btn-primary">Login</button>
        </div>
        <div class="text-right col-6">
          <button type="button" class="btn px-0 btn-link">Forgot password?</button>
        </div>
      </div>
    </form>
  </div>
</div>
      </div></div></div>
{{--

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}" aria-label="{{ __('Login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">{{ __('E-Mail Address or Login') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="text" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

--}}
@endsection
