<?php

use App\Http\Controllers\OfferController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::resource('offer', OfferController::class);
    // Route::get('/table/{table}/qr', [TableController::class, 'generateQr'])->name('table.qr_gen');
});
