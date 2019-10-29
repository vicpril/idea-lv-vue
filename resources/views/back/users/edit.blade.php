@extends('back.layout')

@push('css')

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
			Редактировать автора
			@else Новый автор
			@endisset
		</h2>

    <form method="POST" id='form'
					@if(isset($id))
						action="{{ route('users.update', $id) }}"
					@else
						action="{{ route('users.store') }}"
					@endif
					>
			@if(isset($id)) @method('PUT') @endif
      @csrf
			<user-profile
				@isset($id):id="{{ $id }}"@endisset
				:old="{{ json_encode(Session::getOldInput(), JSON_FORCE_OBJECT) }}"
				@if(count($errors) > 0)
					:errors="{{$errors}}"
				@endif
				></user-profile>
    </form>
</div>
@endsection


@section('modals')

@endsection


@section('footer')
  {!! $footer !!}
@endsection

@push('lib')
		<!-- CKEditor -->
		<script type="text/javascript" src="{{ asset('vendor/ckeditor/ckeditor.js') }}"></script>
		<!-- elFinder -->
		<script defer type="text/javascript" src="{{ asset('packages/barryvdh/elfinder/js/standalonepopup.js') }}"></script>
@endpush

@push('js')

@endpush
