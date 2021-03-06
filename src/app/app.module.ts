import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {HttpClientModule} from '@angular/common/http';
import {App} from './app.component';

import {ProductListPage} from "../pages/product/product-list";
import {ProductInfoPageModule} from "../pages/product-info/product-info.module";
import {BookPage} from "../pages/epub-reader/book/book";
import {TocPage} from "../pages/epub-reader/toc/toc";
import {SettingsPage} from "../pages/epub-reader/settings/settings";
import {HttpServiceProvider} from '../providers/http-service/http-service';
import './global'
import {WebPageModule} from "../pages/web/web.module";
import {StoreModule} from "@ngrx/store";
import {appVersionReducer} from "../components/store/app-version/AppVersionReducer";
import {HomePageModule} from "../pages/home/home.module";
import {ComponentsModule} from "../components/components.module";
import {WebCallAppProvider} from '../providers/web-call-app/web-call-app';
import {ProductPageModule} from "../pages/product/product.module";
import {ProductPanelPageModule} from "../pages/product-panel/product-panel.module";
import {ProductListPageModule} from "../pages/product-list/product-list.module";
import {ProductPanelInfoPageModule} from "../pages/product-panel-info/product-panel-info.module";
import {subjectReducer} from "../components/store/subject/SubjectReducer";

@NgModule({
  declarations: [
    App,
    BookPage,
    TocPage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WebPageModule,
    HomePageModule,
    ComponentsModule,
    ProductPageModule,
    ProductInfoPageModule,
    ProductListPageModule,
    ProductPanelPageModule,
    ProductPanelInfoPageModule,
    IonicModule.forRoot(App, {
      tabsHideOnSubPages: true,
      swipeBackEnabled: true,
      iconMode: 'ios',
      mode: 'ios',
    }),
    StoreModule.forRoot({
      appVersion: appVersionReducer,
      subject: subjectReducer,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    ProductListPage,
    BookPage,
    TocPage,
    SettingsPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpServiceProvider,
    WebCallAppProvider
  ]
})
export class AppModule {

}
