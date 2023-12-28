<?php

namespace Database\Seeders;

use App\Models\categories;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i=0;$i<10;$i++){
            $category = categories::insert([
                'name'=>Str::random(10),
            ]);
        }


    }
}
