<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class IssueResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'year' => $this->year,
            'tom' => $this->tom,
            'no' => $this->no,
            'part' => $this->part,
            'full_no' => $this->full_no,
            'file_title_ru' => $this->file_title_ru,
            'file_title_en' => $this->file_title_en,

            "articles" => $this->articles->map(function ($article) {
                return [
                    "id" => $article->id,
                    "position" => $article->position,
                    "status" => $article->status->type,
                    'editLink' => $article->editLink,

                    "users" => $article->users->map(function ($user) {
                        return [
                            'editLink' => $user->editLink,
                            "short_name_ru" => $user->ru->short_name,
                            "short_name_en" => $user->en->short_name,
                        ];
                    }),
                    "tags" => $article->tags->map(function ($tag) {
                        return $tag->title_ru;
                    }),
                    'categories' => $article->categories->map(function ($cat) {
                        return [
                            "id" => $cat->id,
                            "title_ru" => $cat->title_ru,
                        ];
                    }),
                    "title_en" => $article->en->title,
                    "title_ru" => $article->ru->title,
                ];
            }),

            'link' => route('articles') . "?year=$this->year&no=$this->no&part=$this->part",
        ];
    }
}
