<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Author;
use App\Models\User;

class AuthorController extends Controller
{
    public function create(Request $request){

        $request->validate(
            [
                'author_name'       => 'required',
                'username'          => 'required'
            ]
        );

        $user = new User();
        $user->name     = $request->username;
        $user->email    = $request->username.'@gmail.com';
        $user->password = 12345678;
        $user->save();

        $userId = User::select('id')->where('name',$user->name)->orderBy('id','DESC')->first();

        $author = new Author();
        $author->name = $request->author_name;
        $author->user_id = $userId->id;
        $author->save();

        $author = Author::with(['user'])->where('user_id', $author->user_id)->first();

        return response()->json([
            'author'         => $author,
            'message'        => 'Author '.$author->name.' created successfully.'
        ], Response::HTTP_OK);
    }


}
