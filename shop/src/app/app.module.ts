import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
    declarations: [AppComponent, FirstComponent, ProductListComponent, ProductComponent, CartComponent],
    imports: [BrowserModule, AppRoutingModule, CommonModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
