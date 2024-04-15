<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'                  => 'string',
            'product_category_id'   => 'numeric',
            'sale_price'            => 'decimal:0,2|min:0',
            'purchase_price'        => 'decimal:0,2|min:0',
            'stock'                 => 'decimal:0,2|min:0',
            'min_stock'             => 'decimal:0,2|min:0',
            'um'                    => 'string'
        ];
    }
}
