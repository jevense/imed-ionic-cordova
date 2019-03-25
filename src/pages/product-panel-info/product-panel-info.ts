import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";
import {Store} from "@ngrx/store";
import {SubjectAction} from "../../components/store/subject/SubjectAction";
import {Subject} from "../../components/Subject";

/**
 * Generated class for the ProductPanelInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'product-panel-info',
  segment: 'product-panel/:id'
})
@Component({
  selector: 'page-product-panel-info',
  templateUrl: 'product-panel-info.html',
})
export class ProductPanelInfoPage {

  constructor(private navCtrl: NavController,
              public navParams: NavParams,
              private webCallAppProvider: WebCallAppProvider,
              private storeSubject: Store<Subject>,) {
    this.storeSubject.dispatch(new SubjectAction(this.navParams.get("id")));
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop().catch();
    } else {
      this.webCallAppProvider.WebCallApp("CmdGoBack");
    }
  }

}
