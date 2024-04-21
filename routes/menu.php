<?php

use App\Http\Controllers\MenuController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::resource('menu', MenuController::class);
    // Route::get('/table/{table}/qr', [TableController::class, 'generateQr'])->name('table.qr_gen');
});
