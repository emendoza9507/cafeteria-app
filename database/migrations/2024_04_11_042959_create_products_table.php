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
            $table->foreignId('product_category_id')->references('id')->on('product_categories');
            $table->string('name');
            $table->decimal('sale_price');
            $table->decimal('purchase_price');
            $table->text('description')->nullable();
            $table->decimal('stock');
            $table->decimal('min_stock')->default('0.00');
            $table->string('um');
            $table->boolean('active')->default(true);
            $table->timestamps();
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
