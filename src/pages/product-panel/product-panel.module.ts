import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProductPanelPage} from './product-panel';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ProductPanelPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductPanelPage),
    ComponentsModule,
  ],
})
export class ProductPanelPageModule {
}
