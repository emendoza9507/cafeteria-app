<?php

namespace App\Http\Controllers;

use App\Http\Requests\Table\TableStoreRequest;
use App\Http\Requests\Table\TableUpdateRequest;
use App\Models\Table;
use chillerlan\QRCode\Data\QRMatrix;
use chillerlan\QRCode\Output\QRGdImagePNG;
use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TableController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $show = $request->query->getInt('show', 5);
        $pagination = Table::orderBy('name', 'asc')->paginate($show);
        return Inertia::render('Table/Index', compact('pagination'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Table/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TableStoreRequest $request)
    {
        Table::create($request->validated());
        return redirect()->route('table.index')->with('message', 'Mesa creada..');
    }

    /**
     * Display the specified resource.
     */
    public function show(Table $table)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Table $table)
    {
        return Inertia::render('Table/Edit', compact('table'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TableUpdateRequest $request, Table $table)
    {
        $table->update($request->validated());
        return redirect()->route('table.index')->with('message', 'Mesa actualizada.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Table $table)
    {
        $table->delete();
        return redirect()->route('table.index')->with('message', 'Mesa eliminada.');
    }

    public function generateQr(Table $table) {
        // Debo generar una logica para almacenar URLs de un solo uso para y atender las peticiones de las ofertas

        $data = json_encode([
            'name' => 'Eduardo',
            'apellidos' => 'Mendoza Campos'
        ]);

        $options = new QROptions();

        $options->version             = 7;
        $options->outputInterface     = QRGdImagePNG::class;

        return response((new QRCode($options))->render($data));
    }
}
