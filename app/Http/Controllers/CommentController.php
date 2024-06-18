<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Comment;
use App\Models\Audience;
use App\Models\Article;
use App\Models\Author;
use App\Models\User;

class CommentController extends Controller
{
    public function getCommentsForAudience($audienceId)
    {
        $audience = Audience::findOrFail($audienceId);
        $comments = $audience->comments()->with('user')->get();
        return response()->json($comments);
    }

    public function getCommentsForArticle($articleId)
    {
        $article = Article::findOrFail($articleId);
        $comments = $article->comments()->with('user')->get();
        return response()->json($comments);
    }

    public function getCommentsForAuthor($authorId)
    {
        $author = Author::findOrFail($authorId);
        $comments = $author->comments()->with('user')->get();
        return response()->json($comments);
    }

    public function addCommentToAudience(Request $request)
    {
        $request->validate(
            [
                'username'          => 'required',
                'comment'           => 'required',
                'audience_name'     => 'required',

            ]
        );
        $audience = Audience::where('name',$request->audience_name)->first();
        $user     = User::where('name',$request->username)->first();

        $comment = new Comment();
        $comment->name = $request->comment;
        $comment->user_id = $user->id;
        $comment->commentable_id = $audience->id;
        $comment->commentable_type = Audience::class;

        $comment->save();

        $isAuthor = Author::where('user_id',$user->id)->first();
        $isAudience = Audience::where('user_id',$user->id)->first();

        if($isAuthor){

            $comment = Comment::with('user','commentable')->where('name',$request->comment)->first();

            return response()->json([
                'comment'           => $comment,
                'message'          => 'author '.$isAuthor->name.' commented on audience '.$request->audience_name.': '.$request->comment
            ], Response::HTTP_OK);
        }else{

            $comment = Comment::with('user','commentable')->where('name',$request->comment)->first();


            return response()->json([
                'comment'         => $comment,
                'message'          => 'audience '.$isAudience->name.' commented on audience '.$request->audience_name.': '.$request->comment
            ], Response::HTTP_OK);
        }



    }

    public function addCommentToArticle(Request $request)
    {
        $request->validate(
            [
                'username'          => 'required',
                'comment'           => 'required',
                'article_name'      => 'required',

            ]
        );

        $article  = Article::where('name',$request->article_name)->first();
        $user     = User::where('name',$request->username)->first();

        $comment = new Comment();
        $comment->name              = $request->comment;
        $comment->user_id           = $user->id;
        $comment->commentable_id    = $article->id;
        $comment->commentable_type  = Article::class;

        $comment->save();

        $isAuthor = Author::where('user_id',$user->id)->first();
        $isAudience = Audience::where('user_id',$user->id)->first();

        if($isAuthor){

            $comment = Comment::with('user','commentable')->where('name',$request->comment)->first();

            return response()->json([
                'comment'           => $comment,
                'message'          => 'author '.$isAuthor->name.' commented on article '.$request->article_name.': '.$request->comment
            ], Response::HTTP_OK);
        }else{

            $comment = Comment::with('user','commentable')->where('name',$request->comment)->first();


            return response()->json([
                'comment'         => $comment,
                'message'          => 'audience '.$isAudience->name.' commented on article '.$request->article_name.': '.$request->comment
            ], Response::HTTP_OK);
        }
    }

    public function addCommentToAuthor(Request $request)
    {
        $request->validate(
            [
                'username'          => 'required',
                'comment'           => 'required',
                'author_name'       => 'required',

            ]
        );

        $author   = Author::where('name',$request->author_name)->first();
        $user     = User::where('name',$request->username)->first();

        $comment = new Comment();
        $comment->name              = $request->comment;
        $comment->user_id           = $user->id;
        $comment->commentable_id    = $author->id;
        $comment->commentable_type  = Author::class;

        $comment->save();

        $isAuthor = Author::where('user_id',$user->id)->first();
        $isAudience = Audience::where('user_id',$user->id)->first();

        if($isAuthor){

            $comment = Comment::with('user','commentable')->where('name',$request->comment)->first();

            return response()->json([
                'comment'           => $comment,
                'message'          => 'author '.$isAuthor->name.' commented on author '.$request->author_name.': '.$request->comment
            ], Response::HTTP_OK);
        }else{

            $comment = Comment::with('user','commentable')->where('name',$request->comment)->first();


            return response()->json([
                'comment'         => $comment,
                'message'          => 'audience '.$isAudience->name.' commented on author '.$request->author_name.': '.$request->comment
            ], Response::HTTP_OK);
        }
    }

    public function allCommentsOfAudience(Request $request){
        $request->validate(
            [
                'audience_name'        => 'required'
            ]
        );

        $audience = Audience::with('comments')->select('id','name','article_id','user_id')->where('name',$request->audience_name)->get();


        return response()->json([
            'Audience'         => $audience,
            'message'        => "all comment of audience '".$request->audience_name
        ], Response::HTTP_OK);

    }

    public function allCommentsWithTopic(){


        $comment = Comment::with('commentable')->get();


        return response()->json([
            'comment'         => $comment,
            'message'        => "all all comments which include topic that each comment is on."
        ], Response::HTTP_OK);

    }
}
