import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProductPage} from './product';
import {SuperTabsModule} from "ionic2-super-tabs";

@NgModule({
  declarations: [
    ProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductPage),
    SuperTabsModule.forRoot(),
  ]
})
export class ProductPageModule {
}
