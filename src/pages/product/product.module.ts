import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProductPage} from './product';
import {SuperTabsModule} from "ionic2-super-tabs";
import {ProductListPage} from "./product-list";

@NgModule({
  declarations: [
    ProductPage,
    ProductListPage
  ],
  imports: [
    IonicPageModule.forChild(ProductPage),
    SuperTabsModule.forRoot(),
  ]
})
export class ProductPageModule {
}
