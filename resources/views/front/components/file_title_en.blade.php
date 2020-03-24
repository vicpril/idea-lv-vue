{{-- 
        @foreach($article->users as $user)
                {{ $user->en->last_name }} {{ $user->en->first_name }}@if(!$loop->last)<span>, </span>@endif
        @endforeach
        <span>. </span>{{ $article->en->title }}<i>Ideas and Ideals,  {{ $article->issue->year }}, Volume {{ $article->issue->tom }}, Issue {{ $article->issue->no }}, part {{ $article->issue->part }}</i>
        <i>, pp. {{ $article->doiFirstPage }}&#8208;{{ $article->doiLastPage }}.</i>
--}}
@foreach($article->users as $user)
        {{ $user->en->last_name }} {{ $user->en->initials }}@if(!$loop->last)<span>, </span>@endif
@endforeach
<span> </span>{{ $article->en->title }}. <i>Idei i idealy = Ideas and Ideals</i>,  {{ $article->issue->year }}, vol. {{ $article->issue->tom }}, iss. {{ $article->issue->no }}, pt {{ $article->issue->part }}, pp. {{ $article->doiFirstPage }}&#8208;{{ $article->doiLastPage }}.