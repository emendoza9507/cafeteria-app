<?php

namespace App\Http\Requests\Product;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
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
        // $this->merge([
        //     'sale_price' => $thi('sale_price')
        // ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'                  => 'required|string',
            'product_category_id'   => 'required|numeric',
            'sale_price'            => 'required|decimal:0,2|min:0',
            'purchase_price'        => 'required|decimal:0,2|min:0',
            'stock'                 => 'required|decimal:0,2|min:0',
            'min_stock'             => 'required|decimal:0,2|min:0',
            'um'                    => 'required|string',

            'image'                 => 'file|image'
        ];
    }
}
