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
        Schema::create('order_has_manu_has_offers', function (Blueprint $table) {
            $table->foreignId('order_id')->references('id')->on('orders');
            $table->foreignId('menu_has_offers_id')->references('id')->on('menu_has_offers');
            $table->primary(['order_id', 'menu_has_offers_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_has_manu_has_offers');
    }
};
