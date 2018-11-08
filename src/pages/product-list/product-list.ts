import {Component} from '@angular/core';
import {App, Events, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {type1Array, type2Array} from "../../app/global";

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
  searchText: string = "";

  constructor(public appCtrl: App,
              public navParams: NavParams,
              public httpService: HttpServiceProvider,
              public events: Events,) {
    this.category = this.navParams.get("key");

    events.subscribe('search', ({searchText}) => {
      // this.navCtrl.pop().catch(e => console.log(e));
      this.searchText = searchText;
      this.items.splice(0, this.items.length);
      this.page = 0;
      this.getData();
    });
    events.subscribe('searchReset', () => {
      // this.navCtrl.pop().catch(e => console.log(e));
      this.searchText = "";
      this.items.splice(0, this.items.length);
      this.page = 0;
      this.getData();
    });
  }

  ionViewDidLoad() {
    this.getData();
    console.log('ionViewDidLoad ProductListPage');
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.getData(infiniteScroll);
  }

  goToDetail(item) {
    this.appCtrl.getRootNavs()[0].push('product-info', {id: item['id']},).catch();
  }

  bookType(textbook, textbookType) {
    if (textbook != '0') {
      return type1Array[textbook]
    } else {
      return type2Array[textbookType]
    }
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
