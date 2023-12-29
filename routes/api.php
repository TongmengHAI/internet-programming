<?php

use App\Http\Controllers\CategoriesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::controller(CategoriesController::class)->group(function(){
//     Route::get('/categories');
//     Route::post('/categories');
//     Route::get('/categories/{categoryId}');
//     Route::patch('/categories/{categoryId}');
//     Route::delete('/categories/{categoryId}');
// });

    Route::get('/categories',function(){
        return "Get all categories";
    });

    Route::post('/categories',function(Request $request){
        return "Create all categories";
    });

    Route::patch('/categories/{categoryId}',function(Request $request){
        return "Update 1 category";
    });

    Route::delete('/categories/{categoryId}',function(Request $request){
        return "Delete 1 category";

    });

    Route::get('/product',function(){
        return "Get all products";
    });

    Route::post('/product',function(Request $request){
        return "Create all products";
    });

    Route::patch('/product/{productId}',function(Request $request){
        return "Update 1 product";
    });

    Route::delete('/product/{productId}',function(Request $request){
        return "Delete 1 product";

    });



