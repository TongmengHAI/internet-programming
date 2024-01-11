<?php

namespace App\Http\Controllers;

use App\Models\categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function getCategories(){
        $getCategories = categories::select('*')->get();

        return response()->json(['code'=>200,"message"=>"Successfully",'data'=>$getCategories]);
    }
    public function getCategory($id){
        $getCategory = categories::select('*')->where('id',$id)->first();

        return response()->json(['code'=>200,"message"=>"Successfully",'data'=>$getCategory]);
    }
    public function createCategory(Request $request){
        $new_category = categories::create([
            'name'=>$request->name
        ]);
        return "success";
    }
    public function updateCategory(Request $request , $id){

        $updateCategory = categories::where('id',$id)->update([
            'name'=>$request->name
        ]);

        return response()->json(['code'=>200,"message"=>"Update Successfully"]);
    }
    public function deleteCategory(Request $request , $id){
        $updateCategory = categories::where('id',$id)->delete();
        if($updateCategory){
            return response()->json(['code'=>200,"message"=>"Delete Successfully"]);
        }
        return response()->json(["message"=>"Category not available"]);


    }
}

