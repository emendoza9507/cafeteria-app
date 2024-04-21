<?php

namespace App\Services;

use App\Models\Offer;

class OfferService {
    public function calctOfferProductCost(Offer $offer, $save = true) {
        $products = $offer->products;
        $cost = 0;

        foreach($products as $product) {
            $product_sale_price = $product->sale_price;
            $offer_product_count = $product->pivot->product_count;

            $cost += $product_sale_price * $offer_product_count;
        }

        if($save && $offer->product_cost !== $cost) {
            $offer->update(['product_cost' => $cost]);
        }

        return $cost;
    }
}
