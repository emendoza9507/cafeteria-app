<?php

namespace App\Http\Controllers;

use App\Http\Requests\Menu\StoreMenuRequest;
use App\Http\Requests\Menu\UpdateMenuRequest;
use App\Models\Menu;
use App\Models\Offer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $show = $request->query->getInt('show', 5);

        $menus = Menu::where('date', Carbon::now()->format('Y-m-d'))->with(['offers.products'])->paginate($show);

        return Inertia::render('Menu/Index', array(
            'pagination' => $menus
        ));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $offers = Offer::where('active', true)->with('products')->get();

        return Inertia::render('Menu/Create', array(
            'offers' => $offers
        ));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMenuRequest $request)
    {
        $menu = Menu::create($request->validated());

        // $offers = $request->products;
        // $syncs = [];
        // foreach($products as  $product) {
        //     $syncs[$product['id']]  = ['product_count' => $product['product_count']];
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMenuRequest $request, Menu $menu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu)
    {
        //
    }
}
