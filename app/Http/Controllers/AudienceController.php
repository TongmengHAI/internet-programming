<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Audience;
use App\Models\Article;
use App\Models\User;

class AudienceController extends Controller
{
    public function create(Request $request){

        $request->validate(
            [
                'audience_name'       => 'required',
                'username'          => 'required'
            ]
        );

        $user = new User();
        $user->name     = $request->username;
        $user->email    = $request->username.'@gmail.com';
        $user->password = 12345678;
        $user->save();

        $userId = User::select('id')->where('name',$user->name)->orderBy('id','DESC')->first();

        $audience = new Audience();
        $audience->name = $request->audience_name;
        $audience->user_id = $userId->id;
        $audience->save();

        $audience = Audience::with(['user'])->where('user_id', $audience->user_id)->first();

        return response()->json([
            'audience'         => $audience,
            'message'        => 'audience '.$audience->name.' created successfully.'
        ], Response::HTTP_OK);
    }

    public function subscribeToArticle(Request $request){
        $request->validate(
            [
                'article_name'     => 'required',
                'audience_name'    => 'required',

            ]
        );

        $my_array = [];


        $audience = Audience::where('name',$request->audience_name)->first();

        $article  = Article::select('id')->where('name',$request->article_name)->first();

        $my_array =  $audience->article_id;
        $my_array = array_push($my_array, $article->id);

        return $my_array;

        // $audience->article_id = array_push($audience->article_id,$article->id);
        // $audience->article_id = 1;

        $audience->save();

        return response()->json([
            'audience'         => $audience,
            'message'          => 'audience '.$audience->name.' subscribed article successfully.'
        ], Response::HTTP_OK);


    }
}
