<?php

namespace App\Http\Controllers;

use App\Http\Requests\Category\CategoryStoreRequest;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $show = $request->query->getInt('show', 10);

        $categories = ProductCategory::orderBy('id', 'desc')->paginate($show);

        return Inertia::render('Category/Index', [
            'pagination' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Category/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryStoreRequest $request)
    {
        ProductCategory::create($request->validated());
        return redirect()->back()->with('message', 'Categoria creada');
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductCategory $productCategory)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductCategory $productCategory)
    {
        return Inertia::render('Category/Edit', ['category' => $productCategory]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryStoreRequest $request, ProductCategory $productCategory)
    {
        $productCategory->update($request->validated());
        return redirect()->back()->with('message', 'Categoria actualizada');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductCategory $productCategory)
    {
        if(!Product::where('product_category_id', $productCategory->id)->first()) {
            $productCategory->delete();
            return redirect()->back()->with('message', 'Categoria eliminada');
        }

        return redirect()->back()->with('message', 'No se puede eliminar una categoria con Productos');
    }
}
