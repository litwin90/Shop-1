import { Component, OnInit } from '@angular/core';

import { ICartData } from '../../models/cart-data.model';
import { ICartProductItem } from '../../models/cart-product.model';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
    cartProducts: Array<ICartProductItem>;
    cartData: ICartData;

    constructor(public cartService: CartService) {}

    ngOnInit(): void {
        this.cartProducts = this.cartService.getCartProducts();
        this.cartData = this.cartService.getCartData();
    }

    onRemoveAll(): void {
        this.cartService.removeAllProducts();
    }

    onRemove(cartProduct): void {
        this.cartService.removeProduct(cartProduct);
    }

    onDecreaseQuantity(cartProduct): void {
        this.cartService.decreaseQuantity(cartProduct);
    }

    onIncreaseQuantity(cartProduct): void {
        this.cartService.increaseQuantity(cartProduct);
    }
}
