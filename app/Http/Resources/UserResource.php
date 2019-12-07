<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            "alias" => $this->alias,
            'email' => $this->email,
            'editLink' => $this->editLink,
            'link' => route('authors.show', $this->alias),
            'articles' => $this->articles->count(),
            'role' => $this->role,
            "avatar" => $this->avatar,
            "description_en" => $this->en->description,
            "description_ru" => $this->ru->description,
            "first_name_en" => $this->en->first_name,
            "first_name_ru" => $this->ru->first_name,
            "full_name" => $this->ru->full_name,
            "short_name_ru" => $this->ru->short_name,
            "short_name_en" => $this->en->short_name,
            "degree_en" => $this->en->degree,
            "degree_ru" => $this->ru->degree,
            "redcol_info_en" => $this->en->redcol_info,
            "redcol_info_ru" => $this->ru->redcol_info,
            "jobs_en" => ($this->en->jobs) ?: [],
            "jobs_ru" => ($this->ru->jobs) ?: [],
            "initials_en" => $this->en->initials,
            "initials_ru" => $this->ru->initials,
            "last_name_en" => $this->en->last_name,
            "last_name_ru" => $this->ru->last_name,
            "orcid" => $this->orcid,
            "patronymic_en" => $this->en->patronymic,
            "patronymic_ru" => $this->ru->patronymic,
            "updated_at" => $this->updated_at->format('Y-m-d H:i:s'),
            "created_at" => $this->created_at->format('Y-m-d H:i:s'),

        ];
    }
}
