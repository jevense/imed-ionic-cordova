import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";

/**
 * Generated class for the ProductInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html',
})
export class ProductInfoPage {

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
              public navParams: NavParams,
              public httpService: HttpServiceProvider) {
  }

  ionViewDidLoad() {
    let isbn = this.navParams.get("isbn");
    this.httpService.getProductByISBN(isbn)
      .subscribe(item => {
        this.item = item
      });
    console.log('ionViewDidLoad ProductInfoPage');
  }

  buy(item) {
    this.navCtrl.push('OrderPage', {},).catch();
  }

  open(item) {
    this.navCtrl.push('EpubReaderPage', {},).catch();
  }

}
