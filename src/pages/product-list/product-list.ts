import {Component} from '@angular/core';
import {App, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";

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
  page: number = 0;
  category: string;

  constructor(public appCtrl: App,
              public navParams: NavParams,
              public httpService: HttpServiceProvider) {
    this.category = this.navParams.get("key");
  }

  ionViewDidLoad() {

    this.httpService.getProductList(this.category, this.page++,)
      .subscribe(items => {
        this.items.push(...items);
      });
    console.log('ionViewDidLoad ProductListPage');
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.httpService.getProductList(this.category, this.page++,)
      .subscribe(items => {
        this.items.push(...items);
        infiniteScroll.complete();
      });
  }

  goToDetail(item) {
    this.appCtrl.getRootNavs()[0].push('product-info', {id: item['isbn']},).catch();
  }
}
