<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->user()->role === 'admin';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        $rules = [
            'full_name' => 'required|max:150',
            'alias' => 'max:150|unique:users,alias',
            'email' => 'required|email|max:150',
            'last_name_ru' => 'required|max:150',
            'first_name_ru' => 'required|max:150',
            'patronymic_ru' => 'max:150',
            'initials_ru' => 'max:150',
            'short_name_ru' => 'required|max:150',
            'last_name_en' => 'required|max:150',
            'first_name_en' => 'required|max:150',
            'patronymic_en' => 'max:150',
            'short_name_en' => 'required|max:150',
            'initials_en' => 'max:150',
            'avatar' => 'string|nullable',
            'orcid' => 'max:150|nullable',
            'post_ru' => 'string|nullable',
            'post_en' => 'string|nullable',
            'jobs_ru' => 'array|nullable',
            'jobs_en' => 'array|nullable',
        ];

        switch ($this->getMethod()) {
            case 'POST':
                return $rules;
            case 'PUT':
                return [
                    'alias' => 'max:100|unique:users,alias,' . $this->user->id,
                    // 'email' => 'required|email|max:100|unique:users,email,' . $this->user->id,
                ] + $rules;
            default:
                return $rules;
        }
    }

    public function withValidator($validator)
    {
        $validator->after(function ($validator) {
            if ($validator->errors()->any()) {
                $validator->errors()->add('title', 'Неверное заполнение формы!');
            }
        });
    }
}
