import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundChangeDirective } from './directives/background-change.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [BackgroundChangeDirective],
    exports: [BackgroundChangeDirective],
})
export class SharedModule {}
