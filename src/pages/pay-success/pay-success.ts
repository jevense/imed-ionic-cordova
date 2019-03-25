import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {type1Array, type2Array} from "../../app/global";
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";

/**
 * Generated class for the PaySuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pay-success',
  templateUrl: 'pay-success.html',
})
export class PaySuccessPage {

  item = {
    id: '',
    name: '',
    cover: '',
    author: '',
    textbook: '',
    textbookType: '',
    size: '',
    price: '',
    originPrice: '',
    consumePoint: '',
    balance: '',
  };

  constructor(public navCtrl: NavController,
              public httpService: HttpServiceProvider,
              public webCallAppProvider: WebCallAppProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaySuccessPage');
  }

  ionViewWillEnter() {

    console.log(this.navParams.data);

    let {token, platform, data} = this.navParams.data;

    let args = {
      "serviceModule": "BS-Service",
      "serviceNumber": "0201210",
      "token": token,
      "args": {
        "tradeNo": data.tradeNo,
        "platform": platform,
      },
      "TerminalType": "A"
    };

    console.log(args);

    this.httpService.postBus(args).subscribe(result => {
      let serviceResult = result['serviceResult'];
      if (typeof serviceResult == 'string') {
        serviceResult = JSON.parse(serviceResult);
      }
      if (serviceResult['flag'] == "true") {
        this.item = {...this.item, ...serviceResult['result']};
        console.log(this.item);
      } else {
        console.log(serviceResult['error']);
      }
    });
  }

  bookType() {
    let textbook = this.item['textbook'];
    if (textbook == '0') {
      return type1Array[textbook]
    } else {
      let textbookType = this.item['textbookType'];
      return type2Array[textbookType]
    }
  }

  learn(id) {
    if (!this.navCtrl.canGoBack()) {
      this.webCallAppProvider.WebCallApp("CmdGoBack");
    } else if (this.item['textbook'] == '4') {
      this.navCtrl.push('product-panel').catch();
    } else {
      let deep = this.navCtrl.length();
      this.navCtrl.remove(deep - 2, 2);
    }

  }

}
