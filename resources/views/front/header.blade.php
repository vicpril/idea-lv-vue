@admin()

<div class="row bg-dark text-white fixed-top">
    <div class="container py-1">
        <a
            href="{{ route('admin') }}"
            class="text-white"
        >
            Панель управления</a>
    </div>
</div>
@endadmin
@admin()
    <header class="blog-header py-0 mt-4">
@else
    <header class="blog-header py-0">
@endif
    <div class="container">
        <div class="header-image">
            <div class="primary-overlay">
                <div class="d-sm-flex mx-0 h-100 py-3 justify-content-between align-items-start ">
                    <a
                        href="{{ app('router')->has('home') ? route('home') : url('/') }}"
                        class="logo-link"
                    >
                        <div class="logo-title">
                            <h1 class="main-title">@lang('Идеи и Идеалы')</h1>
                            <h4 class="second-title">@lang('Научный журнал')</h4>
                        </div>
                    </a>

                    <div class="dropdown form-inline bg-white px-3 border rounded">
                        <span class="">@lang('Язык сайта'): </span>
                        <a
                            class="nav-link dropdown-toggle "
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            @if( Config::get('app.locale') == "ru" )
                            <i class="flag-icon flag-icon-ru mr-1"></i>Русский
                            @else
                            <i class="flag-icon flag-icon-us mr-1"></i>English
                            @endif
                        </a>
                        <div class="dropdown-menu">
                            @foreach(LaravelLocalization::getSupportedLocales()
                            as $localeCode => $properties)
                            <a
                                rel="alternate"
                                class="dropdown-item"
                                hreflang="{{ $localeCode }}"
                                href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}"
                            >
                                <i class="flag-icon flag-icon-{{
                                    $properties['flag']
                                 }} mr-1"></i>@lang($properties['title'])
                            </a>

                            @if(!$loop->last)
                            <div class="dropdown-divider"></div>
                            @endif @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
