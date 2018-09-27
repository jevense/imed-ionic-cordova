import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProductInfoPage} from './product-info';
import {PipesModule} from "../../pipes/pipes.module";


@NgModule({
  declarations: [
    ProductInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductInfoPage),
    PipesModule,
  ],
})
export class ProductInfoPageModule {
}
