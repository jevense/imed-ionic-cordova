import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import WebCallApp from "../../app/global";

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

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
    fee: '1222',
    payType: 'alipay',
    isAppPay: '0',
    actualPaymentAmount: '',
  };

  status: boolean = true;
  payType = '1';

  constructor(public navCtrl: NavController,
              public httpService: HttpServiceProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let {id, token, platform, type = 'id'} = this.navParams.data;

    let args = {
      "serviceModule": "BS-Service",
      "serviceNumber": "0201101",
      "token": token,
      "args": {
        "bookId": id,
        "type": type,
        "platform": platform,
      },
      "TerminalType": "A"
    };
    this.httpService.postBus(encodeURIComponent(JSON.stringify(args)))
      .subscribe(res => {
        let result = JSON.parse(decodeURIComponent(res['data'].replace(/\+/g, '%20')));
        let resultObj = JSON.parse(result["serviceResult"]);
        if (resultObj.flag === "true") {
          this.item = {...resultObj.result}
        } else {
          console.log(resultObj.error);
        }
      });
    this.httpService.getProductById(id)
      .subscribe(item => {

      });
    console.log('ionViewDidLoad OrderPage');
  }

  selectPayType(payType: string) {
    this.item['payType'] = payType;
  }

  payConfirm() {
    if (!this.status) return false;
    let {id, token, platform,} = this.navParams.data;
    if (this.item.isAppPay == '0') {
      this.status = false;
      let args = {
        "serviceModule": "BS-Service",
        "serviceNumber": "0301501",
        "token": token,
        "args": {
          "token": token,
          "bookId": id,
          "platform": platform,
          "discountId": ""
        },
        "TerminalType": "A"
      };

      this.httpService.postBus(encodeURIComponent(JSON.stringify(args))).subscribe(res => {
        let result = JSON.parse(decodeURIComponent(res['data'].replace(/\+/g, '%20')));
        if (!result["opFlag"] || result["opFlag"] === false) {
          if (result["errorMessage"].indexOf("E012-") >= 0) {
            WebCallApp("UserLogout", {logoutType: "E012"});
          }
        } else {
          let resultObj = JSON.parse(result["serviceResult"]);
          if (resultObj['flag'] === 'true') {
            this.navCtrl.push('PaySuccessPage', {
              token, platform, data: resultObj['result']
            },).catch();
          } else {
            console.log(resultObj)
          }
        }
      }, e => {
        this.status = true
      })

    } else {
      if (platform === "0") {
        WebCallApp(JSON.stringify({
          command: "openRechargeView",
          args: {}
        }));
      } else if (platform === "2") {
        alert("对不起，暂不支持PC支付购买，请到手机端支付购买");
      } else {
        let appCallData = {
          command: "payment",
          args: {
            payType: this.payType,
            bookid: id,
            amount: `${this.item.actualPaymentAmount}`,
            uuid: '',
            discountId: ''
          }
        };
        WebCallApp(JSON.stringify(appCallData));
      }

    }
  }
}
