@extends('front.index')

@section('stol_menu')
	@include('front.components.stol_menu')
@endsection

@section('content')
	@foreach($userGroups as $letter => $users)

		<div class="row mb-2">
			<div class="col-12">
				<h4 class="mb-0 px-2">
					{{ $letter }}
				</h4>

			</div>

			<!-- <ul class="list-unstyled"> -->
				@foreach($users as  $user)
				<!-- <li> -->
					<div class="col-lg-3 col-md-4 col-sm-4 col-12">
						<div class="px-2">
							<a href="{{ route('authors.show', ['authorAlias'=>$user->alias]) }}">
								{{ $user->loc->last_name }} {{ $user->loc->initials }}
							</a>
						</div>
					</div>

				<!-- </li> -->

				@endforeach
			<!-- </ul> -->
		</div>
	@endforeach
@endsection

@section('contentFooter')
    <div class="col d-flex justify-content-center">
    <button class="btn btn-link toTop">
        <strong>@lang('К началу страницы')</strong>
    </button>
    </div>

@endsection

@push('scripts')
    <script>
    $('.toTop').on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		});
    </script>
@endpush
