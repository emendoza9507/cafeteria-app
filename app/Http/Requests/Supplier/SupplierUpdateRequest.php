<?php

namespace App\Http\Requests\Supplier;

use App\Models\Supplier;
use Illuminate\Foundation\Http\FormRequest;

class SupplierUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function prepareForValidation()
    {
        $this->merge([
            'phone_numbers' => json_encode($this->phone_numbers)
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'          => 'string',
            'email'         => 'email|unique:'.Supplier::class. ','.$this->id,
            'description'   => 'nullable|string',
            'state'         => 'string',
            'city'          => 'string',
            'street'        => 'string',
            'phone_number'  => 'json',
            'active'        => 'boolean'
        ];
    }
}
