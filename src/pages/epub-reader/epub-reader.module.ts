import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {EpubReaderPage} from './epub-reader';

@NgModule({
  declarations: [
    EpubReaderPage,
  ],
  imports: [
    IonicPageModule.forChild(EpubReaderPage),
  ],
})
export class EpubReaderPageModule {
}
