<?php

namespace Database\Seeders;

use App\Models\Supplier;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Eduardo Mendoza Campos',
            'email' => 'emendoza@gmail.com',
            'username' => 'emendoza',
            'password' => Hash::make('matahambre')
        ]);

        $this->call(ProductCategorySeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(TableSeeder::class);
        $this->call(SupplierSeeder::class);
    }
}
