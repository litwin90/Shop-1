import { Component } from '@angular/core';
import { Color } from './color.model';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
    name = 'Phone';
    description = 'The phone with one of the best screens';
    price = 1000;
    isAvailable = true;
    sizes: string[] = ['large', 'small'];
    colorName: string = Color[2];

    constructor() {}
}
