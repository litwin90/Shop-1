import { Injectable } from '@angular/core';

import { ICartData } from '../../cart/models/cart-data.model';
import { ICartProductItem } from '../../cart/models/cart-product.model';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    setItem(key: string, value: Array<ICartProductItem> | ICartData): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}
