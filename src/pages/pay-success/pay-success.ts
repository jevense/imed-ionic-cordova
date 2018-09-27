import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaySuccessPage');
  }

  learn() {
    this.navCtrl.popToRoot().catch();
  }

}
