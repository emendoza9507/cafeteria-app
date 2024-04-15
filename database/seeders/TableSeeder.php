<?php

namespace Database\Seeders;

use App\Models\Table;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tables = [
            ['name' => 'Mesa 1', 'qr_path' => ''],
            ['name' => 'Mesa 2', 'qr_path' => ''],
            ['name' => 'Mesa 3', 'qr_path' => ''],
            ['name' => 'Mesa 4', 'qr_path' => '']
        ];

        foreach($tables as $table) {
            (new Table($table))->save();
        }
    }
}
