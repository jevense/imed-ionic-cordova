import {Component, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {ProductListPage} from "../product-list/product-list";
import {SuperTabs} from "ionic2-super-tabs";

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  title;
  showMenu: boolean = true;
  productList = ProductListPage;

  data = [{name: '全部', key: 'all'}];
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = navParams.get('title');
    let {data = this.data} = {data: navParams.get('data')};
    this.data = data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.navBar.setBackButtonText("");
    this.superTabs.showToolbar(this.superTabs.getAllChildNavs().length > 1);
  }

}
