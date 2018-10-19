import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {default as WebCallApp, type1Array, type2Array} from "../../app/global";

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
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaySuccessPage2');
  }

  ionViewWillEnter() {

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

    this.httpService.postBus(args).subscribe(result => {
      let serviceResult = result["serviceResult"];
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

  learn() {
    if (this.item['textbook'] == '5' && this.item['textbookType'] == '2') {
      WebCallApp("CmdGoBack");
    } else {
      this.navCtrl.popToRoot().catch();
    }

  }

}
