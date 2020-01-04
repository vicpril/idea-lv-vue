<p class=MsoNormal style='text-align:justify;'><span style='font-size:12.0pt;font-family:"Times New Roman","serif"'>DOI:&nbsp;{{$article->doi}} УДК&nbsp;{{$article->udk}}<br style='mso-special-character:line-break'><![if !supportLineBreakNewLine]><br style='mso-special-character:line-break'><![endif]></span></p>    

{{--<p class=MsoNoSpacing align=center style='text-align:center;text-indent:35.45pt'><span
style='font-size:12.0pt;font-family:"Times New Roman","serif"'><o:p>&nbsp;</o:p></span></p>--}}

<p class=MsoNoSpacing align=center style='text-align:center;text-indent:35.45pt'><b
style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;font-family:
"Times New Roman","serif"; {*text-transform: uppercase;*}'>{{$article->ru->title}}@if ($article->finance)<sup>1</sup>@endif<o:p></o:p></span></b></p>

<p class=MsoNoSpacing align=center style='text-align:center;text-indent:35.45pt'><span
style='font-size:12.0pt;font-family:"Times New Roman","serif"'><o:p>&nbsp;</o:p></span></p>

{{--////шапка////--}}

@if( !$article->stol )

@foreach( $article->users as $user )
    <p class=MsoNormal style=''><b style='mso-bidi-font-weight:
    normal'><span style='font-size:12.0pt;;font-family:"Times New Roman","serif"'>{{$user->ru->full_name}}</span></b>@if( $user->ru->degree ), <span style='font-size:12.0pt;line-height:115%;
font-family:"Times New Roman","serif"'>{{$user->ru->degree}}</span><br>@endif</p>
    @if( $user->ru->jobs )
        @foreach( $user->ru->jobs as $job )
            <i>{{$job}}</i>@if( $loop->index !== count($user->ru->jobs) - 1 );@else.@endif
            <br>
        @endforeach
    @endif

        <p class=MsoNormal style=';mso-border-between:.5pt solid windowtext;
        mso-padding-between:1.0pt;padding-top:1.0pt;mso-padding-top-alt:0cm'><span
        lang=EN-US style='font-size:12.0pt;;font-family:"Times New Roman","serif";
        '>ORCID: {{$user->orcid}}</span></p>

        @if( $user->emailHost != 'localhost.lo' )
        <p class=MsoNormal style='line-height:115%'><i style='mso-bidi-font-style:normal'><span
        style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'><a
        href="mailto:VodichevEG@ipgg.sbras.ru"><span lang=EN-US style='color:windowtext;
        mso-ansi-language:EN-US'>
                        {{$user->email}}
                        </span></a></span></i><i
        style='mso-bidi-font-style:normal'><span lang=EN-US style='font-size:12.0pt;
        line-height:115%;font-family:"Times New Roman","serif";mso-ansi-language:EN-US'><o:p></o:p></span></i></p>
        @endif

@endforeach


{{-- cut job --}}
@endif

<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;
text-indent:35.45pt'><i style='mso-bidi-font-style:normal'><span
style='font-size:12.0pt;font-family:"Times New Roman","serif"'><o:p>&nbsp;</o:p></span></i></p>

{{--*////Аннотация////*--}}
<p class=MsoNormal style='text-align:justify;line-height:115%'><b
style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:12.0pt;
line-height:115%;font-family:"Times New Roman","serif";mso-ansi-language:EN-US'><span
style='mso-spacerun:yes'> </span></span></b><b style='mso-bidi-font-weight:
normal'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>Аннотация.<o:p></o:p></span></b></p>
<div class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;
text-indent:35.45pt'><span style='font-size:12.0pt;font-family:"Times New Roman","serif"'>{!!$article->ru->annotation!!}<o:p></o:p></span></div>

{{--////Ключевые слова////--}}

<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;
text-indent:35.45pt'><b style='mso-bidi-font-weight:normal'><span
style='font-size:12.0pt;font-family:"Times New Roman","serif"'>Ключевые слова</span></b><span
style='font-size:12.0pt;font-family:"Times New Roman","serif"'>: <span
class=SpellE>{{$article->ru->keywords}}<o:p></o:p></span></p>

<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;
text-indent:35.45pt'><span style='font-size:12.0pt;font-family:"Times New Roman","serif";
mso-fareast-font-family:"Times New Roman";color:black'><o:p>&nbsp;</o:p></span></p>

{{--////библиографическое описание для циторования (рамка)////--}}
<div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
mso-border-alt:solid windowtext .5pt;padding:1.0pt 4.0pt 1.0pt 4.0pt'>

<p class=MsoNormal style='line-height:115%;tab-stops:right 467.75pt;border:
none;mso-border-alt:solid windowtext .5pt;padding:0cm;mso-padding-alt:1.0pt 4.0pt 1.0pt 4.0pt'><b
style='mso-bidi-font-weight:normal'><i style='mso-bidi-font-style:normal'><span
style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>Библиографическое
описание для цитирования</span></i></b><b style='mso-bidi-font-weight:normal'><span
style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>:<span
style='mso-tab-count:1'></span><o:p></o:p></span></b></p>

<p class=MsoNormal style='line-height:115%;border:none;mso-border-alt:solid windowtext .5pt;
padding:0cm;mso-padding-alt:1.0pt 4.0pt 1.0pt 4.0pt'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>{!!$article->jobLinkTextRu!!}<o:p></o:p></span></p>

</div>


{{--////Текст статьи////--}}

<div class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;text-indent:35.45pt'><span style='font-size:12.0pt;font-family:"Times New Roman","serif"'>{!!$article->ru->text!!}<o:p></o:p></span></div>
@if( $article->finance )<div>_____________________________<p><sup>1</sup> <span>{{$article->finance}}<span></p></div>@endif


{{--<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;
text-indent:35.45pt'><span style='font-size:12.0pt;font-family:"Times New Roman","serif"'><o:p>&nbsp;</o:p></span></p>
--}}
{{--////Литература////--}}

<p class=MsoNoSpacing style='text-indent:35.45pt'><b style='mso-bidi-font-weight:
normal'><span style='font-size:12.0pt;font-family:"Times New Roman","serif"'>Литература<o:p></o:p></span></b></p>

<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;
text-indent:35.45pt'><span style='font-size:12.0pt;font-family:"Times New Roman","serif"'><o:p>&nbsp;</o:p></span></p>

<div class=MsoNoSpacing style='margin-left:0.0cm;text-align:justify;text-justify:
inter-ideograph;text-indent: 1.25cm'><span lang=EN-US style='font-size:12.0pt;
font-family:"Times New Roman","serif";mso-ansi-language:EN-US'>{!!$article->ru->bibliography!!}<o:p></o:p></span></div>
            

{{--<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph'><span
style='font-size:12.0pt;font-family:"Times New Roman","serif"'><o:p>&nbsp;</o:p></span></p>
--}}

{{--////Даты////--}}
@if($article->date_arrival)
<p class=MsoNormal style='line-height:115%'><span lang=EN-US style='font-size:
12.0pt;line-height:115%;font-family:"Times New Roman","serif";
mso-ansi-language:EN-US'>Статья поступила в редакцию @articleDate($article->date_arrival).<o:p></o:p></span></p>
@endif

@if($article->date_review)
<p class=MsoNormal style='line-height:115%'><span lang=EN-US style='font-size:
12.0pt;line-height:115%;font-family:"Times New Roman","serif";
mso-ansi-language:EN-US'>Статья прошла рецензирование @articleDate($article->date_review).</span><span
lang=EN-US style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif";
mso-ansi-language:EN-US'><o:p></o:p></span></p>
@endif

{{--разрыв--}}
<p class=MsoNormal style='line-height:115%'><span style='font-size:12.0pt;
line-height:115%;font-family:"Times New Roman","serif"'><o:p>&nbsp;</o:p></span></p>

<b style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:12.0pt;
line-height:115%;font-family:"Times New Roman","serif";mso-fareast-font-family:
Calibri;mso-ansi-language:EN-US;mso-fareast-language:EN-US;mso-bidi-language:
AR-SA'><br clear=all style='page-break-before:always'>
</span></b>


{{--////Title_EN////--}}

<p class=MsoNormal style='text-align:justify;'><span style='font-size:12.0pt;font-family:"Times New Roman","serif"'>DOI:&nbsp;{{$article->doi}}</span></p>    


<p class=MsoNoSpacing align=center style='text-align:center'><b
style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:12.0pt;
font-family:"Times New Roman","serif";mso-ansi-language:EN-US; {*text-transform: uppercase;*}'>{{$article->en->title}}<o:p></o:p></span></b></p>

<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph'><span
style='font-size:12.0pt;font-family:"Times New Roman","serif"'><o:p>&nbsp;</o:p></span></p>

{{--////шапка////--}}
@if( !$article->stol )
    
@foreach( $article->users as $user )
    <p class=MsoNormal ><b style='mso-bidi-font-weight:
normal'><span lang=EN-US style='font-size:12.0pt;line-height:115%;font-family:
"Times New Roman","serif";mso-ansi-language:EN-US'>{{$user->en->last_name}} {{$user->en->first_name}}@if(strlen($user->en->first_name) - 1 == 1).@endif</span></b>@if( $user->en->degree), <span style='font-size:12.0pt;line-height:115%;
font-family:"Times New Roman","serif"'>{{$user->en->degree}}</span><br>@endif</p>
    @if( $user->en->jobs )
        @foreach( $user->en->jobs as $job )
            <i>{{$job}}</i>@if( $loop->index !== count($user->en->jobs) - 1 );@else.@endif
            <br>
        @endforeach
    @endif

        <p class=MsoNormal style=';mso-border-between:.5pt solid windowtext;
        mso-padding-between:1.0pt;padding-top:1.0pt;mso-padding-top-alt:0cm'><span
        lang=EN-US style='font-size:12.0pt;;font-family:"Times New Roman","serif";
        '>ORCID: {{$user->orcid}}</span></p>

        @if( $user->emailHost != 'localhost.lo')
        <p class=MsoNormal style='line-height:115%'><i style='mso-bidi-font-style:normal'><span
        style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'><a
        href="mailto:VodichevEG@ipgg.sbras.ru"><span lang=EN-US style='color:windowtext;
        mso-ansi-language:EN-US'>
                        {{$user->email}}
                        </span></a></span></i><i
        style='mso-bidi-font-style:normal'><span lang=EN-US style='font-size:12.0pt;
        line-height:115%;font-family:"Times New Roman","serif";mso-ansi-language:EN-US'><o:p></o:p></span></i></p>
        @endif

@endforeach    
    
    
{{-- cut job --}}
@endif


<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;
text-indent:35.45pt'><span lang=EN-US style='font-size:12.0pt;font-family:"Times New Roman","serif";
mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>

{{--////Аннотация////--}}
<p class=MsoNormal style='text-align:justify;line-height:115%'><b
style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:12.0pt;
line-height:115%;font-family:"Times New Roman","serif";mso-ansi-language:EN-US'><span
style='mso-spacerun:yes'> </span></span></b><b style='mso-bidi-font-weight:
normal'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>Abstract<o:p></o:p></span></b></p>
<div class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;
text-indent:35.45pt'><span lang=EN-US style='font-size:12.0pt;font-family:"Times New Roman","serif";
mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:EN-US'>{!!$article->en->annotation!!}<o:p></o:p></span></div>

{{--////Keywords////--}}

<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph;
text-indent:35.45pt'><b style='mso-bidi-font-weight:normal'><span lang=EN-US
style='font-size:12.0pt;font-family:"Times New Roman","serif";mso-fareast-font-family:
"Times New Roman";color:black;mso-ansi-language:EN-US'>Keywords</span></b><span
lang=EN-US style='font-size:12.0pt;font-family:"Times New Roman","serif";
mso-fareast-font-family:"Times New Roman";color:black;mso-ansi-language:EN-US'>: {{$article->en->keywords}}<o:p></o:p></span></p>

<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph'><span
lang=EN-US style='font-size:12.0pt;font-family:"Times New Roman","serif";
mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNoSpacing style='text-indent:35.45pt'><b style='mso-bidi-font-weight:
normal'><span lang=EN-US style='font-size:12.0pt;font-family:"Times New Roman","serif";
mso-ansi-language:EN-US'>References<o:p></o:p></span></b></p>

<div class=MsoNoSpacing style='margin-left:0.0cm;text-align:justify;text-justify:
inter-ideograph;text-indent: 1.25cm'><span lang=EN-US style='font-size:12.0pt;
font-family:"Times New Roman","serif";mso-ansi-language:EN-US'>{!!$article->en->bibliography!!}<o:p></o:p></span></div>

{{--////библиографическое описание для циторования (рамка)////--}}
<div style='mso-element:para-border-div;border:solid windowtext 1.0pt;
mso-border-alt:solid windowtext .5pt;padding:1.0pt 4.0pt 1.0pt 4.0pt'>

<p class=MsoNormal style='line-height:115%;tab-stops:right 467.75pt;border:
none;mso-border-alt:solid windowtext .5pt;padding:0cm;mso-padding-alt:1.0pt 4.0pt 1.0pt 4.0pt'><b
style='mso-bidi-font-weight:normal'><i style='mso-bidi-font-style:normal'><span
style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>Bibliographic description for citation:</span></i></b><b style='mso-bidi-font-weight:normal'><span
style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>:<span
style='mso-tab-count:1'></span><o:p></o:p></span></b></p>

<p class=MsoNormal style='line-height:115%;border:none;mso-border-alt:solid windowtext .5pt;
padding:0cm;mso-padding-alt:1.0pt 4.0pt 1.0pt 4.0pt'><span style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif"'>{!!$article->jobLinkTextEn!!}<o:p></o:p></span></p>

</div>

<p class=MsoNoSpacing style='text-align:justify;text-justify:inter-ideograph'><span
lang=EN-US style='font-size:12.0pt;font-family:"Times New Roman","serif";
mso-ansi-language:EN-US'><o:p>&nbsp;</o:p></span></p>

{{--////Dates////--}}
@if($article->date_arrival)
<p class=MsoNormal style='line-height:115%'><span lang=EN-US style='font-size:
12.0pt;line-height:115%;font-family:"Times New Roman","serif";
mso-ansi-language:EN-US'>The article was received on @articleDate($article->date_arrival).<o:p></o:p></span></p>
@endif

@if($article->date_review)
<p class=MsoNormal style='line-height:115%'><span lang=EN-US style='font-size:
12.0pt;line-height:115%;font-family:"Times New Roman","serif";
mso-ansi-language:EN-US'>The article was reviewed on @articleDate($article->date_review).</span><span
lang=EN-US style='font-size:12.0pt;line-height:115%;font-family:"Times New Roman","serif";
mso-ansi-language:EN-US'><o:p></o:p></span></p>
@endif

<span style='font-size:11.0pt;line-height:115%;
font-family:"Times New Roman","serif;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:
Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;
mso-bidi-font-family:"Times New Roman";mso-bidi-theme-font:minor-bidi;
mso-ansi-language:RU;mso-fareast-language:EN-US;mso-bidi-language:AR-SA'><br
clear=all style='mso-special-character:line-break;page-break-before:always'>
</span>
