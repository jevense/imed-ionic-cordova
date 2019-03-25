import {NgModule} from '@angular/core';
import {ProgressBarComponent} from './progress-bar/progress-bar';
import {ProductPanelComponent} from './product-panel/product-panel';
import {CommonModule} from "@angular/common";
import {IonicModule} from "ionic-angular";
import { ShareComponent } from './share/share';

@NgModule({
  declarations: [
    ProgressBarComponent,
    ProductPanelComponent,
    ShareComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProgressBarComponent,
    ProductPanelComponent,
    ShareComponent
  ]
})
export class ComponentsModule {
}
