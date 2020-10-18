import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';

import { ProductItem } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    @Input() product: ProductItem;

    @Output()
    buy: EventEmitter<ProductItem> = new EventEmitter<ProductItem>();

    onBuy(product: ProductItem): void {
        this.buy.emit(product);
    }
}
