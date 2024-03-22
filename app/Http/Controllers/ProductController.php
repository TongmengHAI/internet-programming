<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProducts(){
        $getProducts = Product::select('*')->get();

        return response()->json(['code'=>200,"message"=>"Create Successfully",'data'=>$getProducts]);
    }
    public function getProduct($id){
        $getProduct = Product::select('*')->where('id',$id)->first();

        return response()->json(['code'=>200,"message"=>"Successfully",'data'=>$getProduct]);
    }
    public function createProduct(Request $request){

        $name= $pricing = $description = $category_id ="";

        $name = $request->name;
        $pricing = $request->pricing;
        $description = $request->description;
        $category_id = $request->category_id;
        $images = $request->images;

        $new_product = Product::create([
            'name'=>$name,
            'category_id'=>$category_id,
            'pricing'=>$pricing,
            'description'=>$description,
        ]);
        return  response()->json(['code'=>200,"message"=>"Product create Successfully",'data'=>$new_product]);
    }
    public function updateProduct(Request $request , $id){

        $name= $pricing = $description = $category_id ="";

        $name = $request->name;
        $pricing = $request->pricing;
        $description = $request->description;
        $category_id = $request->category_id;

        $new_product = Product::where('id',$id)->update([
            'name'=>$name,
            'category_id'=>$category_id,
            'pricing'=>$pricing,
            'description'=>$description,
        ]);


        return response()->json(['code'=>200,"message"=>"Update Successfully",'data'=>$new_product]);
    }
    public function deleteProduct($id){
        $updateProduct = Product::where('id',$id)->delete();
        if($updateProduct){
            return response()->json(['code'=>200,"message"=>"Delete Successfully"]);
        }
        return response()->json(["message"=>"Product not available"]);
    }

}

