import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {type1Array, type2Array} from "../../app/global";

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'product-list',
  segment: 'product-list'
})
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  searchText: string = "";

  showBar = false;

  category: string;

  items = [];

  page: number = 0;

  title;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpServiceProvider,
              public events: Events,) {
    this.title = navParams.get('title');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');

    this.category = this.navParams.get("key");

    this.events.subscribe('search', ({searchText}) => {
      // this.navCtrl.pop().catch(e => console.log(e));
      this.searchText = searchText;
      this.items.splice(0, this.items.length);
      this.page = 0;
      this.getData();
    });
    this.events.subscribe('searchReset', () => {
      // this.navCtrl.pop().catch(e => console.log(e));
      this.searchText = "";
      this.items.splice(0, this.items.length);
      this.page = 0;
      this.getData();
    });

    this.getData();
  }

  goToDetail(item) {
    this.navCtrl.push('product-info', {id: item['id']},).catch();
  }

  goBack() {
    this.navCtrl.pop().catch();
  }

  bookType(textbook, textbookType) {
    if (textbook != '0') {
      return type1Array[textbook]
    } else {
      return type2Array[textbookType]
    }
  }

  search() {
    this.showBar = !this.showBar;
    !this.showBar && this.events.publish('searchReset');
  }

  searchIcon() {
    return this.showBar ? 'close' : 'search';
  }

  getItems() {
    this.events.publish('search', {searchText: this.searchText});
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.getData(infiniteScroll);
  }

  getData(callback?) {
    if (this.category == 'recommend') {
      this.httpService.getRecommendList(this.searchText, this.page++,)
        .subscribe(items => {
          this.items.push(...items);
          callback && callback.complete();
        });
    } else if (this.category.startsWith('disease')) {
      this.httpService.getDiseaseList(this.category, this.searchText, this.page++,)
        .subscribe(items => {
          this.items.push(...items);
          callback && callback.complete();
        });
    } else {
      this.httpService.getProductList(this.category, this.searchText, this.page++,)
        .subscribe(items => {
          this.items.push(...items);
          callback && callback.complete();
        });
    }
  }

}
