import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

import { ProductItem } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    @Input() product: ProductItem;

    constructor(public cartService: CartService) {}

    onBuy(product): void {
        console.log(product.name, 'book added to cart');
        this.cartService.addToCart(product);
    }
}
