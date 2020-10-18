import { Injectable } from '@angular/core';
import { ProductItem } from './product.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    items: Array<ProductItem> = [];

    addToCart(product): void {
        this.items.push(product);
    }

    getItems(): Array<ProductItem> {
        return this.items;
    }

    clearCart(): void {
        this.items = [];
        console.log('items', this.items);
    }
}
