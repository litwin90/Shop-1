import { Component, Inject, OnInit } from '@angular/core';

import { GeneratorService } from '../../../core/services/generator.service';
import { generatedString5, GeneratorFactory } from '../../../core/generator.factory';
import { IConstants } from '../../../core/models/constants.model';
import { constantsToken } from '../../../core/services/constant.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    providers: [
        GeneratorService,
        { provide: generatedString5, useFactory: GeneratorFactory(5), deps: [GeneratorService] },
    ],
})
export class AboutComponent implements OnInit {
    constructor(
        @Inject(constantsToken) private constants: IConstants,
        @Inject(generatedString5) private generated: string,
    ) {}

    ngOnInit(): void {
        console.log('Constants:', this.constants);
        console.log('generatedString5:', this.generated);
    }
}
