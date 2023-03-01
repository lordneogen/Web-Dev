import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule} from "@angular/router";
import { CartComponent } from './cart/cart.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent, data: {type: 10}},
      {path: 'phones', component: ProductListComponent, data: {type: 1}},
      {path: 'laptops', component: ProductListComponent, data: {type: 2}},
      {path: 'mous', component: ProductListComponent, data: {type: 3}},
      {path: 'key', component: ProductListComponent, data: {type: 4}},
      {path: 'products/:productId', component: ProductDetailComponent},
      {path: 'card', component: CartComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
