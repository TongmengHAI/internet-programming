<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;
use App\Http\Middleware\AuthUser;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/messages', [MessageController::class, 'messages'])
    ->name('messages');
Route::post('/message', [MessageController::class, 'message'])
    ->name('message');
Route::get('/messageL', [MessageController::class, 'messageL']);

Route::get('/users', function () {
    $users = User::all();

    return response($users);
});
