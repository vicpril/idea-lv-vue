@if(count($menu->roots()) > 0)
<div class="card mb-3">
    <div class="card-header">
      <h5 class="font-italic mb-0">@lang('Информация для авторов')</h5>
    </div>
    <div class="card-body">
         <ul class="mb-0">
            @foreach($menu->roots() as $item)
                <a href="{{ $item->url() }}">{{ $item->title }}</a>        
            @endforeach
          </ul>
    </div>
</div>
@endif