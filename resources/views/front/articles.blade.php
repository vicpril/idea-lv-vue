@extends('front.index')

{{-- @section('stol_menu')
    @include('front.components.stol_menu')
@endsection --}}

@section('subtitle')
	{!! $subtitle !!}
@endsection

@section('content')
    @if($issue)

            @if($issue->locTitle)
            <h3 class="category-title mb-4">
                <a href="{{ Storage::url($issue->locTitle) }}">@lang('Обложка и Содержание тома')</a>
            </h3>


            @endif

				@if(count($issue->articles) > 0 )

						@foreach ($issue->articles as $article)
								@if( $loop->first || $article->categories[0]->loc !== $issue->articles[$loop->index - 1]->categories[0]->loc )
										<h3 class="category-title mb-4">
												@include('front.components.categories_link', ['categories' => $article->categories])
											</h3>
								@endif

								@component('front.articles_preview', ['article'=>$article])@endcomponent

						@endforeach

				@else
						<p>@lang('Извините, в этом выпуске еще нет записей.')</p>
				@endif

				{{--
				<!-- 	По предварительной разметке -->
        @foreach($issue->mapedArticles as $category => $articles)
        <section>
                    <h3 class="category-title mb-4">
                    {!! $category !!}
                    </h3>
                            @foreach($articles as $article)

                                @include('front.articles_preview', ['article'=>$article])

                            @endforeach
        </section>
        @endforeach

				--}}
    @else
        <h3>@lang('Выпуск в базе не найден')</h3>
    @endif
@endsection

@section('contentFooter')
    <div class="row mx-2 d-flex">

    <div class="col d-flex justify-content-start">
    @if($prevIssue)
        <a class="btn btn-primary float-right" href="{{ route('articles') }}?year={{$prevIssue->year}}&no={{$prevIssue->no}}&part={{$prevIssue->part}}">@lang('Предыдущий выпуск №:fullno', ['fullno' => $prevIssue->full_no] )</a>
    @endif
    </div>

    <div class="col d-flex justify-content-center">
    <button class="btn btn-link toTop">
        <strong>@lang('К началу страницы')</strong>
    </button>
    </div>

    <div class="col d-flex justify-content-end">
    @if($nextIssue)
        <a class="btn btn-primary" href="{{ route('articles') }}?year={{$nextIssue->year}}&no={{$nextIssue->no}}&part={{$nextIssue->part}}">@lang('Следующий выпуск №:fullno', ['fullno' => $nextIssue->full_no] )</a>
    @endif
    </div>

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
