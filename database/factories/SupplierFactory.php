<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Suplier>
 */
class SupplierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name() . ' ' . $this->faker->lastName(),
            'email' => $this->faker->email(),
            'description' => $this->faker->text(),
            'city' => $this->faker->city(),
            'state' => $this->faker->country(),
            'street' => $this->faker->streetAddress(),
            'phone_numbers' => json_encode([
                'phone 1' => $this->faker->phoneNumber(),
                'phone 2' => $this->faker->phoneNumber()
            ]),
            'active' => $this->faker->randomElement([1, 0])
        ];
    }
}
