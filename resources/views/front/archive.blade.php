@extends('front.index')

{{--@section('stol_menu')
    @include('front.components.stol_menu')
@endsection--}}

@section('content')
	<div class="row no-gutters">
		@foreach($years as $year => $no)
				<div class="col-sm-6 col-lg-4 text-center d-flex">
					<div class="m-1 border flex-fill">
						<h5>{{ $year }}, @lang('Том') {{ $no[0][0]->tom }}</h5>
						<ul class="list-unstyled">
						@foreach($no as $issues)
								<li class="mt-1">
									<span>@lang('Номер')@if(Config::get('app.locale')=='en').@endif {{ $issues[0]->no }} ({{ $issues[0]->full_no }}) </span>
									@foreach($issues as $issue)
										<!-- <strong> -->
											<a class="badge badge-primary badge-pill" href="{{ route('articles') }}?year={{ $issue->year }}&no={{ $issue->no }}&part={{  $issue->part }}">{{$issue->part}}</a>
										<!-- </strong> -->
										@if(!$loop->last)
											<span> | </span>
										@endif
									@endforeach
								</li>
						@endforeach
						</ul>
					</div>	
				</div>
		@endforeach
		

	</div>
@endsection