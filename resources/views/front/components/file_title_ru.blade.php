@if ($article->issue->year >= 2019)
    <i>
        @foreach($article->users as $user)
            {{ $user->ru->short_name }}@if(!$loop->last)<span>, </span>@endif
        @endforeach
    </i> {{ $article->ru->title }} // Идеи и идеалы. &ndash; {{ $article->issue->year }} &ndash; Том {{ $article->issue->tom }}, №{{ $article->issue->no }}, ч.{{ $article->issue->part }}
@else
    <i>
        @foreach($article->users as $user)
            {{ $user->ru->short_name }}@if(!$loop->last)<span>, </span>@endif
        @endforeach
    </i> {{ $article->ru->title }} // Идеи и идеалы. &ndash; {{ $article->issue->year }}, №"{{ $article->issue->no }}, ч.{{ $article->issue->part }}
@endif
@if($article->doi)
&ndash; С. {{ $article->doiFirstPage }}&#8208;{{ $article->doiLastPage }}.
@endif