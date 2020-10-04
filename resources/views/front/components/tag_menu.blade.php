@if($tag_menu)
<div class="card shadow mb-3">
		<div class="card-body">
			 <div class="mb-3">
					<a
						 class="text-uppercase"
						 href="{{ route('authors.index') }}"
						 >@lang('Поиск по авторам')</a
					>
			 </div>
			 <div class="mb-3">
					<span class="text-uppercase"
						 >@lang("Предметный указатель")</span
					>
					<ul>
						 @foreach($tags as $tag)
						 <li>
								<a
									 href="{{ route('tags.show', $tag->alias) }}"
									 >{{ $tag->loc }}</a
								>
								<span
									 class="badge badge-secondary badge-pill"
									 >{{ count($tag->articles) }}</span
								>
						 </li>
						 @endforeach
					</ul>
			 </div>
			 <div>
					<span class="text-uppercase"
						 >@lang('Поиск по ключевым словам')</span
					>
					<form action="{{ route('search') }}" method="GET">
						 <div class="form-group">
								<input
									 type="text"
									 class="form-control my-1 mb-2"
									 name="search"
									 required
								/>
								<button
									 type="submit"
									 class="btn btn-outline-secondary"
								>
									 @lang('Поиск')
								</button>
						 </div>
					</form>
			 </div>
		</div>
 </div>
 @endif