import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import WebCallApp, {exactInfoFromRes, serialNumber, type1Array, type2Array} from "../../app/global";

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'page-order/:id'
})
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  item = {
    name: '',
    cover: '',
    author: '',
    type: '',
    size: '',
    price: '',
    originPrice: '',
    brief: "",
    catalog: "",
    owner: true,
    online: true,
    fee: '',
    payType: '1',
    isAppPay: '0',
    actualPaymentAmount: '',
  };

  // status: boolean = true;
  platform;

  constructor(public navCtrl: NavController,
              public httpService: HttpServiceProvider,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  result = {token: '', platform: ''};

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductInfoPage');
  }

  ionViewWillEnter() {
    let serialGetAPPVersion = serialNumber();
    WebCallApp('GetAPPVersion', {}, serialGetAPPVersion).subscribe(({sn, data: res}) => {
      if (sn == serialGetAPPVersion) {
        this.result = exactInfoFromRes(res);
        let {id} = this.navParams.data;
        let {token, platform,} = this.result;
        let type = this.navCtrl.canGoBack() ? "id" : "isbn";

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
        this.httpService.postBus(args).subscribe(result => {
          // let result = JSON.parse(res.replace(/\+/g, '%20'));
          if (!result['opFlag'] || result['opFlag'] == 'false') {
            this.alertCtrl.create({
              title: result['errorMessage'],
              buttons: ['OK']
            }).present();
          } else {
            let serviceResult = result['serviceResult'];
            if (serviceResult.flag === 'true') {
              this.item = {...this.item, ...serviceResult.result};
            } else {
              console.log(serviceResult.error);
            }
          }
        });
      }
    });
    console.log('ionViewDidLoad OrderPage');
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

  selectPayType(payType: string = '1') {
    this.item.payType = payType;
  }

  payConfirm() {
    // if (!this.status) return false;
    let {id} = this.navParams.data;
    let {token, platform,} = this.result;
    let type = this.navCtrl.canGoBack() ? "id" : "isbn";
    if (this.item.isAppPay == '0') {
      // this.status = false;
      let args = {
        "serviceModule": "BS-Service",
        "serviceNumber": "0301501",
        "token": token,
        "args": {
          "token": token,
          "bookId": id,
          "type": type,
          "platform": platform,
          "discountId": ""
        },
        "TerminalType": "A"
      };

      this.httpService.postBus(args).subscribe(result => {
        if (!result['opFlag'] || result['opFlag'] === 'false') {
          // if (result['errorMessage'].indexOf('E012-') >= 0) {
          //   WebCallApp('UserLogout', {logoutType: 'E012'});
          // }
          this.alertCtrl.create({
            title: result['errorMessage'],
            buttons: ['OK']
          }).present();
        } else {
          let serviceResult = result['serviceResult'];
          if (typeof serviceResult == 'string') {
            serviceResult = JSON.parse(serviceResult);
          }
          if (serviceResult['flag'] === 'true') {
            this.navCtrl.push('PaySuccessPage', {
              token, platform, data: serviceResult['result']
            },).catch();
          } else {
            console.log('')
          }
        }
      }, e => {
        console.log(e)
      })

    } else {
      if (platform === "0") {
        WebCallApp("openRechargeView");
      } else if (platform === "2") {
        alert("对不起，暂不支持PC支付购买，请到手机端支付购买");
      } else {
        let serialpayment = serialNumber();
        WebCallApp("payment", {
          payType: this.item.payType,
          bookid: id,
          amount: `${this.item.actualPaymentAmount}`,
          uuid: '',
          discountId: ''
        }, serialpayment).subscribe(({sn, data: res}) => {
          if (sn == serialpayment) {
            let result = exactInfoFromRes(res);
            console.log(result);
            if (result['opFlag'] == 'true') {
              this.navCtrl.push('PaySuccessPage', {
                token, platform, data: result['serviceResult']['result']['tradeNo']
              }).catch();
            }
          }
        });
      }

    }
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop().catch();
    } else {
      WebCallApp("CmdGoBack");
    }
  }
}
