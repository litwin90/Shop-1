import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
    generateString(n: number): string {
        let result = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < n; i++) {
            result += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return result;
    }
}
