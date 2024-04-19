<?php

namespace App\Http\Controllers;

use App\Http\Requests\Offer\OfferStoreRequest;
use App\Http\Requests\Offer\OfferUpdateRequest;
use App\Models\Offer;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $show = $request->get('show', 5);

        $offers = Offer::with('products')->paginate($show);

        return Inertia::render('Offer/Index', array(
            'pagination' => $offers
        ));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $products = Product::where('active', true)->orderBy('name', 'asc')->get();

        return Inertia::render('Offer/Create', array(
            'products' => $products
        ));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OfferStoreRequest $request)
    {
        $offer = Offer::create($request->validated());

        /* Se renderica el mismo componente pero con la oferta cargada */
        return Inertia::render('Offer/Create', array(
            'offer' => $offer
        ))->with('message', 'Offerta creada...');
    }

    /**
     * Display the specified resource.
     */
    public function show(Offer $offer)
    {
        $offer->load('products');

        return Inertia::render('Offer/Show', array(
            'offer' => $offer
        ));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Offer $offer)
    {
        $offer->load('products');

        return Inertia::render('Offer/Edit', array(
            'offer' => $offer
        ));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(OfferUpdateRequest $request, Offer $offer)
    {
        $offer->update($request->validated());

        /** [{id: number, count: number}] : [{id: 1, count:3}, {id:4, count:50}] **/
        $products = @json_decode($request->products);
        $syncs = [];
        foreach($products as $product) {
            $syncs[] = [($product->id) => ['product_count' => $product->count]];
        }

        $offer->products()->sync($syncs);

        return redirect()->route('offer.show', $offer->id)->with('message', 'Oferta actualizada.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Offer $offer)
    {
        /** No se puede eliminar una oferta que tenga ventas, solo desactivarla **/
        $hasShell = true;
        if($hasShell) {
            $offer->update(['active' => false]);
        }
    }
}
