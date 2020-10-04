import { Component, OnInit } from '@angular/core';

import { ProductItem } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: Array<ProductItem>;

    constructor(public productsService: ProductsService) {}

    ngOnInit(): void {
        this.products = this.productsService.getProducts();
    }
}
