

{{--/////категории////////--}}
@foreach ($articles as $article)
    @if( $loop->first || $article->categories[0]->title_en !== $articles[$loop->index - 1]->categories[0]->title_en )


    @if (($article->categories[0]->title_en != 'No matter') && ($article->categories[0]->title_en != 'From the Editor'))<p class=MsoNormal style='text-align:justify;text-indent:35.4pt'><b
style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:12.0pt;
line-height:115%;font-family:"Times New Roman","serif";mso-ansi-language:EN-US'>{{$article->categories[0]->title_en}}</span></b></p>@endif

        @endif

        {{--///////посты////////--}}
            <p class=MsoNormal style='text-align:justify'>

                    @if (!$article->stol)
                        {{--///////авторы////////--}}
                        @if ( count($article->users) > 0 )
                        <b style='mso-bidi-font-weight: normal'>
                            <span lang=EN-US style='font-size:12.0pt;font-family:"Times New Roman","serif"; mso-ansi-language:EN-US'>
                          @foreach ($article->users as $user)
                            {{$user->en->first_name}} {{$user->en->last_name}}@if($loop->last). @else, @endif
                          @endforeach
                        </span></b>
                        @endif
                    @endif

            <span lang=EN-US style='font-size:12.0pt;line-height:115%; font-family:"Times New Roman","serif";mso-ansi-language:EN-US'>{{$article->en->title}}<o:p></o:p></span></p>

@endforeach


<p class=MsoNormal style='text-indent:35.4pt; text-align:justify'><b style='mso-bidi-font-weight:
normal'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"; mso-ansi-language:EN-US'>Our Contributors<o:p></o:p></span></b></p>
@if ($part == 2)
<p class=MsoNormal style='text-indent:35.4pt; text-align:justify'><b style='mso-bidi-font-weight:
normal'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"; mso-ansi-language:EN-US'>Information for Contributors<o:p></o:p></span></b></p>
@endif
<p class=MsoNormal style='text-align:justify'><b style='mso-bidi-font-weight:
normal'><span lang=EN-US style='font-size:12.0pt;line-height:115%;font-family:
"Times New Roman","serif";mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></b></p>
