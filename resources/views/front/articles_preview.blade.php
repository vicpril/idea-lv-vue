  <article class="ml-4">
    @admin
     <!-- LABEL -->
      <div class="row">
        ID: {{$article->id}}
        @if($article->status->type)
           <span class="badge badge-pill badge-success mr-2">Опубликована</span>
        @else
           <span class="badge badge-pill badge-danger mr-2">Черновик</span>
        @endif
        <a href="{{ $article->editLink }}" target="_blank">Редактровать</a>
      </div>
      <!-- END LABEL -->
    @endadmin
         @isset($breadcrumb){{ $breadcrumb }}@endif
         <h5 class="">
            <a class="article-title" href="{{ route('article', $article->alias) }}">{{ $article->loc->title }}</a>
         </h5>
         <ul
            class="authors mb-2 list-unstyled list-group list-group-horizontal"
         >
            @foreach($article->users as $user)
            <li>
               @if( Config::get('app.locale') == 'ru' )
                  <a class="author-name" href="{{ route('authors.show', $user->alias) }}">{{$user->loc->short_name}}</a>@if(!$loop->last)<span>,&ensp;</span>@endif
               @else
                  <a class="author-name" href="{{ route('authors.show', $user->alias) }}">{{ $user->en->last_name }} {{ $user->en->first_name }}</a>@if(!$loop->last)<span>,&ensp;</span>@endif
               @endif
            </li>
            @endforeach
         </ul>
         @if($article->doi)
         <div class="doi py-1">
            <span class="text-dark"><strong>DOI: </strong></span>
            {{ $article->doi }}
         </div>
         @endif

         <div class="links my-2 d-flex">
            @if($article->udk || $article->loc->annotation || $article->loc->keywords)
            <a
               class=""
               data-toggle="collapse"
               href="#annotation-{{ $article->id }}"
               aria-expanded="false"
               aria-controls="annotation"
               ><i
                  class="fa fa-chevron-down"
                  aria-hidden="true"
               ></i>
               @lang('Аннотация')
            </a>
            @endif

            <ul
               class="ml-auto list-unstyled list-group list-group-horizontal"
            >
                  <li><a href="{{ route('article', $article->alias) }}">@lang('Текст статьи')</a></li>
               @if( $article->ru->file )
                  <li><a href="{{ Storage::url($article->ru->file) }}" target="_blank">PDF</a></li>
               @endif
               @if( $article->file_audio )
                  <li><a href="{{ Storage::url($article->file_audio) }}" target="_blank">@lang('Аудио версия')</a></li>
               @endif
            </ul>
         </div>
         <div class="collapse annotation" id="annotation-{{ $article->id }}">
         @if($article->udk)
            <div class="article-section article-udk">
               <span><strong>@lang('УДК'): </strong></span>{{ $article->udk }}
            </div>
         @endif
         @if($article->loc->annotation)
            <div class="article-section article-annotation">
               <span><strong>@lang('Аннотация'): </strong></span>
               <p class="mb-0">
                  {!! $article->loc->annotation !!}
               </p>
            </div>
         @endif
         @if($article->loc->keywords)
            <div class="article-section article-keywords">
               <span><strong>@lang('Ключевые слова'): </strong></span>
               {{ $article->loc->keywords }}
            </div>
         @endif
         </div>
      </article>