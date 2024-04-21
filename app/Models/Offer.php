<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function products() {
        return $this->belongsToMany(Product::class)->withPivot('product_count');
    }

    public function menus() {
        return $this->belongsToMany(Menu::class)->using(MenuOffer::class);
    }
}
