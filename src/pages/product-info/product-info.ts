import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import WebCallApp, {exactInfoFromRes, serialNumber, type1Array, type2Array} from "../../app/global";

@IonicPage({
  name: 'product-info',
  segment: 'product/:id'
})
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html',
})
export class ProductInfoPage {

  item: ProductInfo = {
    id: '',
    name: '',
    cover: '',
    author: '',
    textbook: '',
    textbookType: '',
    size: '',
    price: '',
    originPrice: '',
    briefIntroduction: '',
    catalog: '',
    owner: true,
    state: 'remote',
    isbn: '',
  };

  result;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpServiceProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    let serialGetAPPVersion = serialNumber();
    WebCallApp('GetAPPVersion', {}, serialGetAPPVersion).subscribe(({sn, data: res}) => {
      if (sn == serialGetAPPVersion) {
        this.result = exactInfoFromRes(res);
      }
    });
    console.log('ionViewDidLoad ProductInfoPage');
  }

  ionViewWillEnter() {
    let {isbn} = this.navParams.data;
    this.httpService.getProductById(isbn, this.result["token"]).subscribe(item => {
      console.log(item);
      this.item = {...item};
      let {isbn} = this.item;
      let serialGetBookState = serialNumber();
      WebCallApp('GetBookState', {isbn}, serialGetBookState).subscribe(({sn, data: bookState}) => {
        if (sn == serialGetBookState) {
          let result = exactInfoFromRes(bookState);
          if (result['state'] == '8') {
            this.item['state'] = 'local';
          } else {
            this.item['state'] = 'remote';
          }
        }
      });
    });
  }

  bookType() {
    let textbook = this.item['textbook'];
    if (textbook != '0') {
      return type1Array[textbook]
    } else {
      let textbookType = this.item['textbookType'];
      return type2Array[textbookType]
    }
  }

  buy() {
    if (this.result['touristsState'] == '1') {
      this.alertCtrl.create({
        title: '请登录',
        buttons: ['OK']
      }).present();
    } else {
      let {token, platform} = this.result;
      let {id} = this.item;
      this.navCtrl.push('OrderPage', {token, platform, id},).catch(e => console.log(e));
    }
  }

  download() {

  }

  open(item) {
    this.navCtrl.push('EpubReaderPage', {},).catch();
  }

  online() {
    return this.item['owner'] && this.item['textbook'] === '0' && this.item['textbookType'] === '0'
  }


  goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop().catch();
    } else {
      WebCallApp("CmdGoBack");
    }
  }

}

class ProductInfo {
  id: string;
  name: string;
  cover: string;
  author: string;
  textbook: string;
  textbookType: string;
  size: string;
  price: string;
  originPrice: string;
  briefIntroduction: string;
  catalog: string;
  owner: boolean;
  state: string;
  isbn: string;
}
