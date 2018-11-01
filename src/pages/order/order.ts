import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {exactInfoFromRes, serialNumber, type1Array, type2Array} from "../../app/global";
import {AppVersion} from "../../components/AppVersion";
import {Observable} from "rxjs/Observable";
import {select, Store} from "@ngrx/store";
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";

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

  type;

  constructor(public navCtrl: NavController,
              public httpService: HttpServiceProvider,
              public webCallAppProvider: WebCallAppProvider,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private store: Store<AppVersion>) {
    this.result = this.store.pipe(select('appVersion'));
    this.type = this.navCtrl.canGoBack() ? "id" : "isbn";
  }

  result: Observable<AppVersion>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductInfoPage');
  }

  ionViewWillEnter() {
    this.webCallAppProvider.WebCallApp("TabbarHiddent");
    let {id} = this.navParams.data;
    this.result.subscribe(appversion => {
      let args = {
        "serviceModule": "BS-Service",
        "serviceNumber": "0201101",
        "token": appversion.token,
        "args": {
          "bookId": id,
          "type": this.type,
          "platform": appversion.platform,
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
          if (typeof serviceResult == 'string') {
            serviceResult = JSON.parse(serviceResult);
          }
          if (serviceResult['flag'] && serviceResult['flag'] == 'true') {
            this.item = {...this.item, ...serviceResult['result']};
          } else {
            console.log(serviceResult['error']);
          }
        }
      });
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
    this.result.subscribe(appversion => {
      let {token, platform} = appversion;
      if (this.item.isAppPay == '0') {
        // this.status = false;
        let args = {
          "serviceModule": "BS-Service",
          "serviceNumber": "0301501",
          "token": token,
          "args": {
            "token": token,
            "bookId": id,
            "type": this.type,
            "platform": platform,
            "discountId": ""
          },
          "TerminalType": "A"
        };

        this.httpService.postBus(args).subscribe(result => {
          if (!result['opFlag'] || result['opFlag'] === 'false') {
            this.alertCtrl.create({
              title: result['errorMessage'],
              buttons: ['OK']
            }).present();
          } else {
            let serviceResult = result['serviceResult'];
            if (typeof serviceResult == 'string') {
              serviceResult = JSON.parse(serviceResult);
            }
            if (serviceResult['flag'] && serviceResult['flag'] == 'true') {
              this.navCtrl.push('PaySuccessPage', {
                token, platform, data: serviceResult['result']
              },).catch();
            } else {
              console.log(serviceResult['error']);
            }
          }
        }, e => {
          console.log(e)
        })

      } else {
        if (platform === "0") {
          this.webCallAppProvider.WebCallApp("openRechargeView");
        } else if (platform === "2") {
          alert("对不起，暂不支持PC支付购买，请到手机端支付购买");
        } else {
          let serialpayment = serialNumber();
          this.webCallAppProvider.WebCallApp("payment", {
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
    });
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop().catch();
    } else {
      this.webCallAppProvider.WebCallApp("CmdGoBack");
    }
  }

  cash() {
    return parseFloat(this.item['price']) / 10
  }
}
