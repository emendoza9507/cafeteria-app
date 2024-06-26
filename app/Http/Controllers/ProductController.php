<?php

namespace App\Http\Controllers;

use App\Http\Requests\Product\ProductStoreRequest;
use App\Http\Requests\Product\ProductUpdateRequest;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $show = $request->query->getInt('show', 5);

        $products = Product::with(['category'])
            ->orderBy('id', 'desc')
            ->paginate($show);

        return Inertia::render('Product/Index', array(
            'pagination' => $products
        ));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $product_categories = ProductCategory::all();
        return Inertia::render('Product/Create', [
            'categories' => $product_categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {
        $product = Product::create($request->safe()->except(['image']));

        if($request->files->has('image')) {
            $image = $request->image->store('images/products', 'public');

            $product->image()->create([
                'url' => $image
            ]);
        }

        return redirect()->back()->with('message', 'Producto creado.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $product_categories = ProductCategory::all();
        return Inertia::render('Product/Edit', [
            'product' => $product,
            'categories' => $product_categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductUpdateRequest $request, Product $product)
    {
        $product->update($request->safe()->except(['image']));

        if($request->files->has('image')) {
            $image = $request->image->store('images/products', 'public');

            if($product->image) {
                Storage::disk('public')->delete($product->image->url);

                $product->image->update([
                    'url' => $image
                ]);
            } else {
                $product->image()->create([
                    'url' => $image
                ]);
            }
        }

        return redirect()->route('product.edit', $product)->with('message', 'Producto actualizado.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        if($product->stock > 0) {
            return redirect()->back()->with('message', '!Error, posee '.$product->stock.$product->um.' en stock!');
        }

        $product->update(['active' => false]);

        /** De ser necesario otra accion en adelante implementala aqui se sugiere utilizar Eventos **/

        return redirect()->back()->with('message', 'Producto eliminado');
    }
}
