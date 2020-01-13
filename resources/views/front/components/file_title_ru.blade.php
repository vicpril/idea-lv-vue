@if ($article->issue->year >= 2019)
    <i>
        @foreach($article->users as $user)
            {{ $user->ru->short_name }}@if(!$loop->last)<span>, </span>@endif
        @endforeach
    </i> {{ $article->ru->title }} // Идеи и идеалы. &ndash; {{ $article->issue->year }} &ndash; Том {{ $article->issue->tom }}. &ndash; №"{{ $article->issue->no }}, часть{{ $article->issue->part }}
@else
    <i>
        @foreach($article->users as $user)
            {{ $user->ru->short_name }}@if(!$loop->last)<span>, </span>@endif
        @endforeach
    </i> {{ $article->ru->title }} // Идеи и идеалы. &ndash; {{ $article->issue->year }} &ndash; №"{{ $article->issue->no }}, часть{{ $article->issue->part }}
@endif
&ndash; С. {{ $article->doiFirstPage }}&#8208;{{ $article->doiLastPage }}.