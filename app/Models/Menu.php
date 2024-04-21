<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function orders() {
        return $this->belongsToMany(Order::class)->using(MenuOrder::class);
    }

    public function offers() {
        return $this->belongsToMany(Offer::class)->using(MenuOffer::class);
    }
}
