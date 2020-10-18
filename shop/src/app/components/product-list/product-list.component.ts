import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { ProductItem } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: Array<ProductItem>;

    constructor(public productsService: ProductsService, public cartService: CartService) {}

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }

    onBuy(product): void {
        this.cartService.addToCart(product);
    }
}
