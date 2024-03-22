<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Product\Category;


class CategoryController extends Controller
{
    public function getCategories(){
        $getCategories = Category::select("*")
        ->withCount(['products as n_of_product'])
        ->get();

        return response()->json(['code'=>200,"message"=>"Successfully",'data'=>$getCategories]);
    }
    public function getCategory($id){
        $getCategory = Category::select('*')->where('id',$id)->first();

        return response()->json(['code'=>200,"message"=>"Successfully",'data'=>$getCategory]);
    }
    public function createCategory(Request $request){
        $new_category = Category::create([
            'name'=>$request->name
        ]);
        return response()->json(['code'=>200,"message"=>"Create Successfully",'data'=>$new_category]);
    }
    public function updateCategory(Request $request , $id){

        $find = Category::find($id);

        $find->update([
            'name'=>$request->name
        ]);

        return response()->json(['code'=>200,"message"=>"Update Successfully",'data'=>$find]);
    }
    public function deleteCategory($id){
        $updateCategory = Category::where('id',$id)->delete();
        if($updateCategory){
            return response()->json(['code'=>200,"message"=>"Delete Successfully"]);
        }
        return response()->json(["message"=>"Category not available"]);


    }
}

