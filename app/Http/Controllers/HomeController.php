<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product\Category;


class HomeController extends Controller
{
    public function renderHome(){

        $categories = Category::withCount("products as n_of_product")->get();

        return view('home',compact('categories'));
    }
}
