import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {App, Index} from './app.component';

import {ProductListPage} from "../pages/product-list/product-list";
import {ProductInfoPageModule} from "../pages/product-info/product-info.module";
import {BookPage} from "../pages/epub-reader/book/book";
import {TocPage} from "../pages/epub-reader/toc/toc";
import {SettingsPage} from "../pages/epub-reader/settings/settings";
import {HomePageModule} from "../pages/home/home.module";
import {HttpServiceProvider} from '../providers/http-service/http-service';
import './global'

@NgModule({
  declarations: [
    App,
    Index,
    ProductListPage,
    BookPage,
    TocPage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(App, {
      backButtonText: '',
      tabsHideOnSubPages: true,
      tabsPlacement:'top',
      swipeBackEnabled: true
    }),
    HomePageModule,
    ProductInfoPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    Index,
    ProductListPage,
    BookPage,
    TocPage,
    SettingsPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider
  ]
})
export class AppModule {

}
