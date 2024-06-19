<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Audience;
use App\Models\Article;
use App\Models\Author;
use App\Models\User;

class AudienceController extends Controller
{
    public function create(Request $request){

        $request->validate(
            [
                'article_name'     => 'required',
                'username'         => 'required',
                'audience_name'    => 'required',

            ]
        );

        $findUser = User::where('name',$request->username)->first();

        if(!$findUser){
            $user = new User();
            $user->name     = $request->username;
            $user->email    = $request->username.'@gmail.com';
            $user->password = 12345678;
            $user->save();
            $findUser = User::where('name',$request->username)->first();

        }

        $articleId = Article::select('id')->where('name',$request->article_name)->first();


        $audience = new Audience();
        $audience->name = $request->audience_name;
        $audience->user_id = $findUser->id;
        $audience->article_id = $articleId->id;
        $audience->save();



        $audience = Audience::with(['user'])
        ->where('user_id', $audience->user_id)
        ->orderBy('id','desc')
        ->first();

        return response()->json([
            'audience'         => $audience,
            'message'          => 'audience '.$audience->name.' subscribed article '.$request->article_name
        ], Response::HTTP_OK);
    }

    public function allAudiencesOfArticle(Request $request){
        $request->validate(
            [
                'article_name'        => 'required'
            ]
        );

        $article = Article::with(['Audiences'])
        ->select('id','name','author_id')
        ->where('name', $request->article_name)
        ->first();

        return response()->json([
            'article'         => $article,
            'message'        => "all audiences of article '".$request->article_name
        ], Response::HTTP_OK);

    }

    public function allAudiencesOfAuthor(Request $request){
        $request->validate(
            [
                'author_name'        => 'required'
            ]
        );

        $author = Author::with(['audiences'])
        ->select('id','name','user_id')
        ->where('name', $request->author_name)
        ->first();

        return response()->json([
            'author'         => $author,
            'message'        => "all audiences of author ".$request->author_name
        ], Response::HTTP_OK);

    }

}
