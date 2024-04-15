<?php

namespace Database\Factories;

use App\Models\ProductCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $categories = ProductCategory::all();

        return [
            'product_category_id' => $this->faker->randomElement($categories),
            'name' => $this->faker->word(),
            'description' => $this->faker->text(),
            'sale_price' => $this->faker->numberBetween(0.1, 100),
            'purchase_price' => $this->faker->numberBetween(0.1, 100),
            'stock' => $this->faker->numberBetween(0.1, 100),
            'min_stock' => $this->faker->numberBetween(0.1, 100),
            'um' => $this->faker->randomElement(['u', 'L', 'g', 'Kg'])
        ];
    }
}
