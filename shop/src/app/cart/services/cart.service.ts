import { Injectable } from '@angular/core';

import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ICartData } from '../models/cart-data.model';
import { ICartProductItem } from '../models/cart-product.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cartProducts: Array<ICartProductItem> = [];
    cartData = { totalQuantity: 0, totalSum: 0 };

    constructor(public storageService: LocalStorageService) {}
    // constructor(@Inject(STORAGE) private storageService: LocalStorageService) {}

    addCartProduct(product): void {
        const itemIndex = this.getCartProductIndex(product);
        if (itemIndex !== -1) {
            this.cartProducts[itemIndex].quantity += 1;
        } else {
            this.cartProducts.push({ ...product, quantity: 1 });
        }
        this.updateCartData();
    }

    getCartProducts(): Array<ICartProductItem> {
        // localStorage.clear();
        if (localStorage.cartProducts) {
            this.cartProducts = this.storageService.getItem('cartProducts');
        }
        return this.cartProducts;
    }

    removeAllProducts(): void {
        this.cartProducts.splice(0, this.cartProducts.length);
        this.updateCartData();
    }

    removeProduct(cartProduct): void {
        const itemIndex = this.getCartProductIndex(cartProduct);
        this.cartProducts.splice(itemIndex, 1);
        this.updateCartData();
    }

    getCartData(): ICartData {
        if (localStorage.cartData) {
            this.cartData = this.storageService.getItem('cartData');
        }
        return this.cartData;
    }

    updateCartData(): void {
        this.cartData.totalQuantity = this.cartProducts.reduce((acc, item) => acc + item.quantity, 0);
        this.cartData.totalSum = this.cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);
        this.storageService.setItem('cartProducts', this.cartProducts);
        this.storageService.setItem('cartData', this.cartData);
        console.log(localStorage);
    }

    decreaseQuantity(cartProduct): void {
        const itemIndex = this.getCartProductIndex(cartProduct);
        if (this.cartProducts[itemIndex].quantity === 1) {
            this.cartProducts.splice(itemIndex, 1);
        } else {
            this.cartProducts[itemIndex].quantity -= 1;
        }
        this.updateCartData();
    }

    increaseQuantity(cartProduct): void {
        const itemIndex = this.getCartProductIndex(cartProduct);
        this.cartProducts[itemIndex].quantity += 1;
        this.updateCartData();
    }

    getCartProductIndex(product): number {
        return this.cartProducts.findIndex((item) => item.id === product.id);
    }
}
