<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\AuthorController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\AudienceController;


Route::group(['prefix'=>'author'],function(){
    Route::controller(AuthorController::class)->group(function(){
        Route::post('/create','create');
        // Route::post('/get','index');
    });
});

Route::group(['prefix'=>'audience'],function(){
    Route::controller(AudienceController::class)->group(function(){
        Route::post('/create','create');
        Route::post('/subscribe','subscribeToArticle');
        Route::post('/get','index');
    });
});

Route::group(['prefix'=>'article'],function(){
    Route::controller(ArticleController::class)->group(function(){
        Route::post('/create','create');
        Route::post('/get','index');
    });
});

Route::group(['prefix'=>'comment'],function(){
    Route::controller(CommentController::class)->group(function(){
        Route::post('/create','create');
        Route::post('/get','index');
    });
});




