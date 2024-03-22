<?php

namespace Database\Seeders;

use Faker\Factory;
use App\Models\Product;
use App\Models\categories;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run():void
    {

        DB::table('categories')->insert(
            [
                [
                    'img'=>"humbeger.png",
                    'name'=>"Cake-Milk",

                    'color'=>"#F2FCE4",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"persimmon.png",
                    'name'=>"Peach",

                    'color'=>"#FFFCEB",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"kiwi.png",
                    'name'=>"Oganic Kiwi",

                    'color'=>"#ECFFEC",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"apple.png",
                    'name'=>"Red apple",

                    'color'=>"#FEEFEA",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"snack.png",
                    'name'=>"Snack",

                    'color'=>"#FFF3EB",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"blueberry.png",
                    'name'=>"Black plum",

                    'color'=>"#FFF3FF",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"cabbage.png",
                    'name'=>"Vegetables",

                    'color'=>"#F2FCE4",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"headphone.png",
                    'name'=>"Headphone",

                    'color'=>"#FFFCEB",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"Biscuits.png",
                    'name'=>"Cake-Milk",

                    'color'=>"#F2FCE4",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    'img'=>"orange.png",
                    'name'=>"Orange",

                    'color'=>"#FFF3FF",
                    'created_at'=>now(),
                    'updated_at'=>now()
                ]
            ]
        );

        DB::table('products')->insert(
            [
                [
                    "specail_offer"=> "-17%",
                    "image"=>'mengo.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Seeds of Change Organic Quinoa, Brown, & Red Rice",
                    "rating"=> rand(0,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()
                ],
                [
                    "specail_offer"=> "Hot",
                    "image"=>'corn.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "All Natural Italian-Style Chicken Meatballs",
                    "rating"=> rand(1,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> "Sale",
                    "image"=>'oranges.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
                    "rating"=> rand(1,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> " ",
                    "image"=>'chilis.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Foster Farms Takeout Crispy Classic Buffalo",
                    "rating"=> rand(1,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> " ",
                    "image"=>'lemons.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Blue Diamond Almonds Lightly Salted Vegetables",
                    "rating"=> rand(1,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> " ",
                    "image"=>'fish.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Chobani Complete Vanilla Greek Yogurt",
                    "rating"=> rand(1,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> "Sale",
                    "image"=>'fish_lemon.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g",
                    "rating"=> rand(1,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> " ",
                    "image"=>'steak.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Encore Seafoods Stuffed Alaskan Salmon",
                    "rating"=> rand(1,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [
                    "specail_offer"=> " ",
                    "image"=>'fish_fille.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Gorton’s Beer Battered Fish Fillets with soft paper",
                    "rating"=> rand(1,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ],
                [

                    "specail_offer"=> "Hot",
                    "image"=> 'vegetable.png',
                    "category_id"=> rand(1,10),
                    "pricing"=>rand(10,50),
                    "name" => "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
                    "rating"=> rand(1,5),
                    "weight"=> rand(100,500),
                    "description"=>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quidem ea deserunt dolorem earum explicabo fugit repellendus hic delectus modi!",
                    "discount_pricing" => rand(0,20),
                    'created_at'=>now(),
                    'updated_at'=>now()

                ]


            ]
        );


    }
}
