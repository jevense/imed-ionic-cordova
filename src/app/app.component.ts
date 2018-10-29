import {Component} from '@angular/core';
import {HomePage} from "../pages/home/home";
import WebCallApp, {exactInfoFromRes, serialNumber} from "./global";
import {AppVersion} from "../components/AppVersion";
import {Store} from "@ngrx/store";
import {AppVersionAction} from "../components/AppVersionAction";
import {LoadingController} from "ionic-angular";

@Component({
  templateUrl: 'app.html'
})
export class App {

  rootPage: any = HomePage;

  loading;

  // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     // statusBar.styleDefault();
  //     // splashScreen.hide();
  //   });
  // }

  constructor(private store: Store<AppVersion>, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({duration: 5000});
    this.loading.present();
  }

  ngAfterViewInit() {
    // Let's navigate from TabsPage to Page1
    // this.nav.push('');
    let serialGetAPPVersion = serialNumber();
    WebCallApp('GetAPPVersion', {}, serialGetAPPVersion).subscribe(({sn, data: res}) => {
      if (sn == serialGetAPPVersion) {
        this.store.dispatch(new AppVersionAction(exactInfoFromRes(res)));
        this.loading.dismiss();
      }
    });
  }
}
