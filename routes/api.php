<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
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



Route::middleware(['auth:api'])->group(function(){

    Route::controller(CategoryController::class)->group(function(){
        Route::get('/categories',"getCategories");
        Route::post('/category',"createCategory");
        Route::get('/category/{categoryId}',"getCategory");
        Route::post('/category/{categoryId}',"updateCategory");
        Route::delete('/category/{categoryId}',"deleteCategory");
    });

    Route::controller(ProductController::class)->group(function(){
        Route::get('/products',"getProducts");
        Route::post('/product',"createProduct");
        Route::get('/product/{productId}',"getProduct");
        Route::post('/product/{productId}',"updateProduct");
        Route::delete('/product/{productId}',"deleteProduct");
    });

});





