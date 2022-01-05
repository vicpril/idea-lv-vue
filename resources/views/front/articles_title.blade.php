@if($issue)
  @if(Config::get('app.locale') == 'ru')
      Идеи и Идеалы. {{ $issue->year }} г. Том {{ $issue->tom }}, № {{ $issue->no }}, часть {{ $issue->part }} | 
  @else
      IDEAS AND IDEALS {{ $issue->year }} Volume {{ $issue->tom }} Issue {{ $issue->no }} part {{ $issue->part }} |
  @endif
      @if($issue->part == 1)
         <a class="article-title-part-link" href="{{ route('articles', ['year' => $issue->year,
            'no' => $issue->no,
            'part' => 2,
            ]) }}">2</a>
      @else
         <a class="article-title-part-link" href="{{ route('articles', ['year' => $issue->year,
            'no' => $issue->no,
            'part' => 1,
            ]) }}">1</a>
      @endif
@endif