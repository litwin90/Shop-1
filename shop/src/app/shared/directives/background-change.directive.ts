import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appBackgroundChange]',
})
export class BackgroundChangeDirective {
    @HostBinding('style.backgroundColor') backgroundColor: string;

    @HostListener('mouseenter') onMouseEnter(): void {
        this.backgroundColor = 'whiteSmoke';
    }

    @HostListener('mouseleave') onMouseLeave(): void {
        this.backgroundColor = 'white';
    }
}
