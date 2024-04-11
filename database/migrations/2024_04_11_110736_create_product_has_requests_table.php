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
        Schema::create('product_has_requests', function (Blueprint $table) {
            $table->foreignId('product_id')->primary()->references('id')->on('products');
            $table->foreignId('request_id')->primary()->references('id')->on('requests');
            $table->decimal('stock_request');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_has_requests');
    }
};
