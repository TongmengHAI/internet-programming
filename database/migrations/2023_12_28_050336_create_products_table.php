<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('category_id')->unsigned();
            $table->double('pricing');
            $table->string('specail_offer')->nullable();
            $table->string('tag_color')->nullable();
            $table->double('discount_pricing')->nullable()->default(0);
            $table->text('description')->nullable();
            $table->integer('rating')->nullable()->default(0);
            $table->integer('weight')->nullable()->default(0);
            $table->text('image')->nullable();

            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
