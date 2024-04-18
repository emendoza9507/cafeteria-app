<?php

namespace App\Http\Controllers;

use App\Http\Requests\Supplier\SupplierStoreRequest;
use App\Http\Requests\Supplier\SupplierUpdateRequest;
use App\Models\Request as ModelsRequest;
use App\Models\Supplier;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pagination = Supplier::orderBy('id', 'desc')->paginate(10);
        return Inertia::render('Supplier/Index', [
            'pagination' => $pagination
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Supplier/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SupplierStoreRequest $request)
    {
        Supplier::create($request->validated());
        return redirect()->route('supplier.index')->with('message', 'Proveedor agregado.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier)
    {
        return Inertia::render('Supplier/Show', [
            'supplier' => $supplier
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Supplier $supplier)
    {
        return Inertia::render('Supplier/Edit', [
            'supplier' => $supplier
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SupplierUpdateRequest $request, Supplier $supplier)
    {
        $supplier->update($request->validated());
        return redirect()->back()->with('message', 'Proveedor actualziado.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Supplier $supplier)
    {
        /** Logica para poder eliminar un proveedor **/
        /** No deberian existir pedidos al mismo **/
        if(!ModelsRequest::where('supplier_id', $supplier->id)->first()) {
            $supplier->delete();
            return redirect()->route('supplier.index')->with('message', 'Proveedor eliminado');
        }

        /** Si existen pedidos solo desactivar **/
        $supplier->update(['active' => false]);
        return redirect()->route('supplier.index')->with('message', 'Proveedor desactivado');
    }
}
