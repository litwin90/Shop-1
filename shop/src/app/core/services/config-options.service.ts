import { Injectable } from '@angular/core';

import { IConfigOptions } from '../models/config-options.model';

@Injectable({
    providedIn: 'root',
})
export class ConfigOptionsService {
    configOptions: IConfigOptions = { id: null, login: null, email: null };

    getConfigOptions(): IConfigOptions {
        return this.configOptions;
    }

    setConfigOptions(options: IConfigOptions): void {
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                this.configOptions[key] = options[key];
            }
        }
    }
}
