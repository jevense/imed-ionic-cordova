import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProductPanelInfoPage} from './product-panel-info';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ProductPanelInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductPanelInfoPage),
    ComponentsModule,
  ],
})
export class ProductPanelInfoPageModule {
}
