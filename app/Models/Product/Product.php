<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

use App\Models\Product\Category;


class Product extends Model
{
    use HasFactory;


    public function category(): BelongsTo //M:1
    {
        return $this->belongsTo(Category::class, 'category_id','id')->select('*');
    }

}
