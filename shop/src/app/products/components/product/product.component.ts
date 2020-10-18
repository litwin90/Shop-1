import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { IProductItem } from '../../models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    @Input() product: IProductItem;

    @Output() buy: EventEmitter<IProductItem> = new EventEmitter<IProductItem>();

    onBuy(product: IProductItem): void {
        if (product.isAvailable) {
            this.buy.emit(product);
        }
    }
}
