<?php

use App\Http\Controllers\ProductController;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    /** CRUD PRODUCTOS **/
    Route::resource('product', ProductController::class);
    // Route::get('/table/{table}/qr', [TableController::class, 'generateQr'])->name('table.qr_gen');

    /** AUTOCOMPLETE DE LOS NOMBRES **/
    Route::get('/products', function() {
        return ProductResource::collection(Product::select(DB::raw('DISTINCT name'))->get());
    })->name('product.resource.list');
});
