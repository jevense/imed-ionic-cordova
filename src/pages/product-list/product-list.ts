import {Component} from '@angular/core';
import {App, NavParams} from 'ionic-angular';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  items = [];

  constructor(public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        name: '结膜切口的眼眶肌锥内海绵状血管瘤摘除',
        cover: 'bag-1.png',
        author: '孙丰源',
        type: '通关包',
        size: '2MB',
        price: '640',
        originPrice: '800'
      });
    }
    console.log('ionViewDidLoad ProductListPage');
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.items.push({
          name: '结膜切口的眼眶肌锥内海绵状血管瘤摘除',
          cover: 'bag-1.png',
          author: '孙丰源',
          type: '通关包',
          size: '2MB',
          price: '640',
          originPrice: '800'
        });
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  goToDetail(item) {
    this.appCtrl.getRootNav().push('ProductInfoPage', {},).catch();
  }
}
