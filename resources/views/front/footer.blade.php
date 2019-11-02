<footer class="py-3 ">
   <div class="container">
       <div class="row">

            <div class="col-md text-left">
                <small>
                <a href="@lang('http://old-ideaidealy.nsuem.ru')" class="text-white">@lang('К предыдущей версии сайта')</a>
                </small>
            </div>

           <div class="col-md text-center">
                @if(env('YANDEX_METRIKA_ID'))
                <!-- Yandex.Metrika informer -->
                <a href="https://metrika.yandex.ru/stat/?id={{ env('YANDEX_METRIKA_ID') }}&amp;from=informer"
                target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/{{ env('YANDEX_METRIKA_ID') }}/3_1_FFFFFFFF_EFEFEFFF_0_pageviews"
                style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="46144197" data-lang="ru" /></a>
                <!-- /Yandex.Metrika informer -->
                @endif
           </div>
           <div class="col-md text-right">
               <small class="text-white"
               >@lang('Разработал')
               <a href="mailto:prilepinva@gmail.com" class="desiner">@lang('Виктор Прилепин')</a></small
               >
            </div>

        </div>
   </div>
</footer>
