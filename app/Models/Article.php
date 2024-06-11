<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Article extends Model
{
    use HasFactory;

    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function audiences(): HasMany
    {
        return $this->hasMany(Audience::class, 'article_id');
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(Author::class, 'author_id')->select('id','name');
    }
}
