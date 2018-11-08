import {Component, ViewChild} from '@angular/core';
import {Events, IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {ProductListPage} from "../product-list/product-list";
import {SuperTabs} from "ionic2-super-tabs";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  name: 'product',
  segment: 'product'
})
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  title;
  key;
  data;
  searchText;
  showBar = false;
  productList = ProductListPage;

  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,) {
    this.title = navParams.get('title');
    this.key = navParams.get('key');
    let {data = [{name: '全部', key: this.key}]} = {data: navParams.get('data')};
    this.data = data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.navBar.setBackButtonText("");
    this.superTabs.showToolbar(this.superTabs.getAllChildNavs().length > 1);
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

}
