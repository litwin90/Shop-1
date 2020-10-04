import { Injectable } from '@angular/core';

import { ProductItem } from './product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor() {}

    getProducts(): Array<ProductItem> {
        return [
            new ProductItem(
                1,
                'Fantasy',
                'Harry Potter and the Prisoner of Azkaban',
                'J.K. Rowling',
                'The novels chronicle the lives of a young wizard, Harry Potter, and his friends.',
                10,
                true,
            ),
            new ProductItem(
                2,
                'Science fiction',
                'Cloud Atlas',
                'David Mitchell',
                'The fantastical speculative fiction book consists of six interconnected nested stories.',
                15,
                false,
            ),
            new ProductItem(
                3,
                'Novel',
                'The Adventures of Tom Sawyer',
                'Mark Twain',
                'The novel about a young boy growing up along the Mississippi River.',
                12,
                true,
            ),
        ];
    }
}
