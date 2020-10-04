@extends('front.index')

{{--@section('stol_menu')
	@include('front.components.stol_menu')
@endsection--}}

@section('content')
		<div class="mb-2">
			<h4> @lang('Редакция')</h4>
			<ul class="list-unstyled">
				@foreach($redcols['red'] as $row)
					@component('front.redcols_item', ['row'=>$row])
					@endcomponent
				@endforeach
			</ul>
		</div>

		<div class="mb-2">
			<h4> @lang('Редакционный совет')</h4>
			<ul class="list-unstyled">
				@foreach($redcols['sovet'] as $row)
					@component('front.redcols_item', ['row'=>$row])
					@endcomponent
				@endforeach
			</ul>
		</div>
		
		<div class="mb-2">
			<h4> @lang('Международный редакционный совет')</h4>
			<ul class="list-unstyled">
				@foreach($redcols['int-sovet'] as $row)
					@component('front.redcols_item', ['row'=>$row])
					@endcomponent
				@endforeach
			</ul>
		</div>



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