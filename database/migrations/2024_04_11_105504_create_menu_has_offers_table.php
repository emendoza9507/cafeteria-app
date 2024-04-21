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
        Schema::create('menu_offer', function (Blueprint $table) {
            $table->foreignId('menu_id')->references('id')->on('menus');
            $table->foreignId('offer_id')->references('id')->on('offers');
            $table->primary(['menu_id', 'offer_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_has_offers');
    }
};
