import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';
import { ProductItem } from '../product.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    items: Array<ProductItem>;

    constructor(public cartService: CartService) {}

    ngOnInit(): void {
        this.items = this.cartService.getItems();
    }

    onConfirm(): void {
        console.log('Confirm');
        this.cartService.clearCart();
        this.items = this.cartService.getItems();
    }
}
