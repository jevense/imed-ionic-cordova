import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
  cucumber;

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
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  selectPayType(payType: string) {
    this.item['payType'] = payType;
  }

  payConfirm() {
    this.navCtrl.push('PaySuccessPage', {},).catch();
  }
}
