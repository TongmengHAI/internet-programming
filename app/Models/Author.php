<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Author extends Model
{
    use HasFactory;

    public function comments():MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');

    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id')->select('id','name');
    }

    public function articles():HasMany
    {
        return $this->hasMany(Article::class, 'author_id');
    }

    public function audiences(): HasManyThrough
    {
        return $this->hasManyThrough( Audience::class, Article::class, 'author_id', 'article_id');
    }
}
