<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
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
            "id" => $this->id,
            "alias" => $this->alias,
            "link" => $this->link,
            "status" => $this->status->type,
            "template" => $this->template,

            "show_top_menu" => $this->show_top_menu,
            "show_sidebar_menu" => $this->show_sidebar_menu,
            "show_review_menu" => $this->show_review_menu,
            "show_tag_menu" => $this->show_tag_menu,

            "created_at" => $this->created_at->format('Y-m-d H:i'),
            "updated_at" => $this->updated_at->format('Y-m-d H:i'),

            "on_en" => $this->en->on,
            "on_ru" => $this->ru->on,
            "title_en" => $this->en->title,
            "title_ru" => $this->ru->title,
            "content_ru" => $this->ru->content,
            "content_en" => $this->en->content,

        ];
    }
}
