<?php

namespace Database\Seeders;

use Faker\Factory;
use App\Models\Product;
use App\Models\categories;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        for($i = 0 ; $i<5; $i++){
            $product = Product::insert([
                'name'=>Str::random(10),
                'category_id'=>random_int(1,10),
                'pricing'=>rand(1,100),
                'description'=>fake()->sentence(),
            ]);
        }


    }
}
