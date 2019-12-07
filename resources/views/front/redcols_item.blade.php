
<li>
	<div>
@if($row->postLoc)
	<i>{{$row->postLoc}}:</i><br>
@endif
	<a href="{{route('authors.show', ['alias'=>$row->user->alias])}}">
		@if(Config::get('app.locale') == 'ru')
			{{$row->user->loc->full_name}}
		@else
			{{$row->user->loc->short_name}}
		@endif
	</a>

	@admin
		<span> -> </span>
		<a href="{{ $row->user->editLink }}" class="text-info" target="_blank">Редактировать</a>
    @endadmin

	@isset($row->user->loc->redcol_info)
	, {{ $row->user->loc->redcol_info }}
    @endif
    {{--
        <!-- @if(count($row->user->loc->jobs) > 0)
		@foreach($row->user->loc->jobs as $job)
        , {{ $job }}
		@endforeach
        @endif -->
    --}}
	</div>
</li>
