@extends('back.layout')

@push('css')
<!--  Select2     -->
<!-- <link rel="stylesheet" href="{{ asset('vendor/select2/css/select2.css') }}"> -->

@endpush


@section('sidebar')
      {!! $sidebar !!}
@endsection


@section('navbar')
      {!! $navbar !!}
@endsection

@section('content')
<div class="content">

		<h2 class="mb-3">@isset($id)
			Редактировать статью
			@else Новая статья
			@endisset
		</h2>

    <form method="POST" id='form'
					@if(isset($id))
						action="{{ route('articles.update', $id) }}"
					@else
						action="{{ route('articles.store') }}"
					@endif
					>
			@if(isset($id)) @method('PUT') @endif
      @csrf
			<article-profile
				@isset($id):id="{{ $id }}"@endisset
				:old="{{ json_encode(Session::getOldInput(), JSON_FORCE_OBJECT) }}"
				@if(count($errors) > 0)
					:errors="{{$errors}}"
				@endif

				@if(Request::input('year'))
					:set-year="{{ Request::input('year') }}"
				@endif
				@if(Request::input('no'))
					:set-no="{{ Request::input('no') }}"
				@endif
				@if(Request::input('full-no'))
					:set-full-no="{{ Request::input('full-no') }}"
				@endif
				@if(Request::input('part'))
					:set-part="{{ Request::input('part') }}"
				@endif

				></article-profile>
    </form>
</div>
@endsection


@section('modals')

@endsection


@section('footer')
  {!! $footer !!}
@endsection

@push('lib')
    <!-- Select 2 -->
<!--     <script defer type="text/javascript" src="{{ asset('vendor/select2/js/select2.full.min.js') }}"></script> -->

		<!-- CKEditor -->
		<script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>
		<!-- elFinder -->
		<script defer type="text/javascript" src="{{ asset('packages/barryvdh/elfinder/js/standalonepopup.js') }}"></script>
@endpush

@push('js')
    <!-- Set script -->
<!--     @yield('modal_set_js') -->

    <!-- Upload script -->
<!--     @yield('modal_upload_js') -->

@endpush
