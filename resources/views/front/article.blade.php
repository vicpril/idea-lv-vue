@extends('front.index')

@section('stol_menu')
    @include('front.components.stol_menu')
@endsection

@section('breadcrumbs')
	<div class="row mx-2">
		@component('front.components.breadcrumbs', ['article'=> $article, 'cat'=>true])@endcomponent
	</div>
@endsection

@isset($subtitle)
	@section('subtitle')
			{!! $subtitle !!}
	@endsection
@endisset

@section('content')
	@admin
     <!-- LABEL -->
    <div class="row">
        @if($article->status->type)
           <span class="badge badge-pill badge-success mr-2">Опубликована</span>
        @else
           <span class="badge badge-pill badge-danger mr-2">Черновик</span>
        @endif
        <a href="{{ $article->editLink }}" target="_blank">Редактровать</a>
    </div>
    <!-- END LABEL -->
    @endadmin

	@if(count($article->users) > 0)
	<span class="text-dark"><strong>@choice('article.author', count($article->users)):</strong></span>
		<div>

			@foreach($article->users as $user)
				<strong>
				    @if( Config::get('app.locale') == 'ru' )
						<a class="author-name" href="{{ route('authors.show', $user->alias) }}">{{$user->loc->short_name}}</a>@if(!$loop->last)<span>,&ensp;</span>@endif
					@else
						<a class="author-name" href="{{ route('authors.show', $user->alias) }}">{{ $user->en->last_name }} {{ $user->en->first_name }}</a>@if(!$loop->last)<span>,&ensp;</span>@endif
					@endif
				</strong>
			@endforeach

		</div>
	@endif

  @if($article->doi)
		<div class="article-doi mb-3">
			<span class="text-dark"><strong>DOI:</strong> </span><a href="{{ url('http://dx.doi.org/') }}{{$article->doi}}">{{$article->doi}}</a>
		</div>
	@endif

	@if( count($article->tags)>0 )
		<div class="article-tags mb-3">
			<span class="text-dark"><strong>@lang('Темы материала'):</strong></span>
			<ul class="authors list-unstyled list-group list-group-horizontal">
				@foreach($article->tags as $tag)
				<li>
					 <a class="text-info" href="{{ route('tags.show', $tag->alias) }}">{{$tag->loc}}</a>@if(!$loop->last)<span>,&ensp;</span>@endif
				</li>
				@endforeach
		</ul>
		</div>
	@endif

	@if($article->applications)
		<div class="article-doi mb-3">
			<span class="text-dark d-block"><strong>@lang('Приложения к статье'):</strong></span>
			<div>
				{!! $article->applications !!}
			</div>
		</div>
	@endif

	@if($article->ru->file)
		<div class="article-doi mb-3">
			<span class="text-dark d-block"><strong>@lang('Вы можете скачать статью по ссылке'):</strong></span>
			<a href="{{ Storage::url($article->ru->file) }}" target="_blank">{!! $article->loc->fileTitle !!}</a>
		</div>
	@endif

	@if($article->file_audio)
		<div class="article-doi mb-3">
			<span class="text-dark d-block"><strong>@lang('Вы можете прослушать аудио версию статьи'):</strong></span>
			<a href="{{ Storage::url($article->file_audio) }}" target="_blank">{{ explode('/', $article->file_audio)[count(explode('/', $article->file_audio))-1] }}</a>
		</div>
	@endif
@endsection

@section('contentFooter')
	@if( $prevArticle || $nextArticle)
			<div class="row mx-2 d-flex">

			<div class="col d-flex justify-content-start">
			@if($prevArticle)
					<a class="btn btn-primary float-right" href="{{ route('article', $prevArticle->alias) }}" title="{{$prevArticle->loc->title}}">@lang('Предыдущая статья выпуска')</a>
			@endif
			</div>

			<div class="col d-flex justify-content-center">
			</div>

			<div class="col d-flex justify-content-end">
			@if($nextArticle)
					<a class="btn btn-primary" href="{{ route('article', ['aliasArticle' => $nextArticle->alias]) }}" title="{{$nextArticle->loc->title}}">@lang('Следующая статья выпуска')</a>
			@endif
			</div>

			</div>

	@endif
@endsection
