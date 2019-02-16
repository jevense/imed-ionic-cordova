import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductPanelPage } from './product-panel';

@NgModule({
  declarations: [
    ProductPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductPanelPage),
  ],
})
export class ProductPanelPageModule {}
