import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import WebCallApp, {type1Array, type2Array} from "../../app/global";

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

  ionViewDidLoad() {
    let {id, token, platform, type = 'id'} = this.navParams.data;

    this.platform = platform;

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
    console.log(args);
    this.httpService.postBus(encodeURIComponent(JSON.stringify(args))).subscribe(res => {
      // let result = JSON.parse(res.replace(/\+/g, '%20'));
      let result = JSON.parse(decodeURIComponent(res));
      if (!result['opFlag'] || result['opFlag'] == 'false') {
        this.alertCtrl.create({
          title: result['errorMessage'],
          buttons: ['OK']
        }).present();
      } else {
        let resultObj = result['serviceResult'];
        console.log(resultObj);
        if (resultObj.flag === 'true') {
          this.item = {...this.item, ...resultObj.result};
          console.log(this.item);
        } else {
          console.log(resultObj.error);
        }
      }

    });
    // this.httpService.getProductById(id)
    //   .subscribe(item => {
    //
    //   });
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
    let {id, token, platform,} = this.navParams.data;
    if (this.item.isAppPay == '0') {
      // this.status = false;
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
        let result = JSON.parse(decodeURIComponent(res));
        if (!result['opFlag'] || result['opFlag'] === 'false') {
          // if (result['errorMessage'].indexOf('E012-') >= 0) {
          //   WebCallApp('UserLogout', {logoutType: 'E012'});
          // }
          this.alertCtrl.create({
            title: result['errorMessage'],
            buttons: ['OK']
          }).present();
        } else {
          let resultObj = JSON.parse(result['serviceResult']);
          if (resultObj['flag'] === 'true') {
            this.navCtrl.push('PaySuccessPage', {
              token, platform, data: resultObj['result']
            },).catch();
          } else {
            console.log(resultObj)
          }
        }
      }, e => {
        // this.status = true
      })

    } else {
      if (platform === "0") {
        WebCallApp("openRechargeView");
      } else if (platform === "2") {
        alert("对不起，暂不支持PC支付购买，请到手机端支付购买");
      } else {
        WebCallApp("payment", {
          payType: this.item.payType,
          bookid: id,
          amount: `${this.item.actualPaymentAmount}`,
          uuid: '',
          discountId: ''
        });
      }

    }
  }
}
