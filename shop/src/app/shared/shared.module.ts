import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundChangeDirective } from './directives/background-change.directive';
import { ConstantService, constantsToken } from '../core/services/constant.service';
import { StorageService } from '../core/services/storage.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { AboutComponent } from '../layout/components/about/about.component';

// export const STORAGE = new InjectionToken<LocalStorageService>('Storage');

@NgModule({
    imports: [CommonModule],
    declarations: [BackgroundChangeDirective, AboutComponent],
    exports: [BackgroundChangeDirective, AboutComponent],
    providers: [
        {
            provide: constantsToken,
            useValue: ConstantService,
        },
        { provide: StorageService, useClass: LocalStorageService },
        // { provide: STORAGE, useClass: LocalStorageService },
    ],
})
export class SharedModule {}
