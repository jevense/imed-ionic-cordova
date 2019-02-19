import {AfterViewInit, Component} from '@angular/core';
import {exactInfoFromRes, serialNumber} from "./global";
import {AppVersion} from "../components/AppVersion";
import {Store} from "@ngrx/store";
import {AppVersionAction} from "../components/AppVersionAction";
import {LoadingController} from "ionic-angular";
import {WebCallAppProvider} from "../providers/web-call-app/web-call-app";
import {HomePage} from "../pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class App implements AfterViewInit {

  rootPage: any = HomePage;

  loading;

  constructor(private store: Store<AppVersion>,
              public loadingCtrl: LoadingController,
              public  webCallAppProvider: WebCallAppProvider) {
    this.loading = this.loadingCtrl.create({duration: 5000});
    this.loading.present();//TODO show
  }

  ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
    let serialGetAPPVersion = serialNumber();
    this.webCallAppProvider.WebCallApp('GetAPPVersion', {}, serialGetAPPVersion).subscribe(({sn, data: res}) => {
      if (sn == serialGetAPPVersion) {
        this.store.dispatch(new AppVersionAction(exactInfoFromRes(res)));
        this.loading.dismiss();
      }
    });
  }
}
