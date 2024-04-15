<?php

use App\Http\Controllers\TableController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::resource('table', TableController::class);
    Route::get('/table/{table}/qr', [TableController::class, 'generateQr'])->name('table.qr_gen');
});
