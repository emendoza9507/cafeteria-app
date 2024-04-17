<?php

use App\Http\Controllers\SupplierController;
use App\Http\Resources\SupplierResource;
use App\Models\Supplier;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    /** CRUD PRODUCTOS **/
    Route::resource('supplier', SupplierController::class);
    // Route::get('/table/{table}/qr', [TableController::class, 'generateQr'])->name('table.qr_gen');

    /** AUTOCOMPLETE DE LOS NOMBRES **/
    Route::get('/suppliers', function() {
        return SupplierResource::collection(Supplier::select(DB::raw('DISTINCT name'))->get());
    })->name('supplier.resource.list');
});
