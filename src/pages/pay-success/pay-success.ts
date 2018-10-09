import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";

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
  paySuccess = {
    consumePoint: '',
    balance: '',
  };

  item = {
    name: '结膜切口的眼眶肌锥内海绵状血管瘤摘除',
    cover: 'bag-1.png',
    author: '孙丰源',
    type: '通关包',
    size: '2MB',
    price: '640',
    originPrice: '800',
    brief: "12312",
    catalog: "123123",
    owner: true,
    online: true,
  };

  constructor(public navCtrl: NavController,
              public httpService: HttpServiceProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
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

    this.httpService.postBus(encodeURIComponent(JSON.stringify(args)))
      .subscribe(res => {
        let result = JSON.parse(decodeURIComponent(res['data'].replace(/\+/g, '%20')));
        let resultObj = JSON.parse(result["serviceResult"]);
        if (resultObj.flag === "true") {
          this.item = {...resultObj['result']}
        } else {
          console.log(resultObj.error);
        }
        return resultObj.result
      });
    console.log('ionViewDidLoad PaySuccessPage');
  }

  learn() {
    this.navCtrl.popToRoot().catch();
  }

}
