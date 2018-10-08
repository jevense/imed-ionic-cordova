import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {App} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from "../pages/home/home";
import {ProductListPage} from "../pages/product-list/product-list";
import {ProductInfoPageModule} from "../pages/product-info/product-info.module";
import {BookPage} from "../pages/epub-reader/book/book";
import {TocPage} from "../pages/epub-reader/toc/toc";
import {SettingsPage} from "../pages/epub-reader/settings/settings";
import {WebPageModule} from "../pages/web/web.module";
import {HttpServiceProvider} from '../providers/http-service/http-service';

@NgModule({
  declarations: [
    App,
    HomePage,
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
      // swipeBackEnabled: true
    }),
    ProductInfoPageModule,
    WebPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    HomePage,
    ProductListPage,
    BookPage,
    TocPage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider
  ]
})
export class AppModule {
}
