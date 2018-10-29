import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import WebCallApp, {onlineReadUrl, serialNumber, type1Array, type2Array} from "../../app/global";
import {Product} from "../../components/Product";
import {AppVersion} from "../../components/AppVersion";
import {Observable} from "rxjs/Observable";
import {select, Store} from "@ngrx/store";
import {WebPage} from "../web/web";

@IonicPage({
  name: 'product-info',
  segment: 'product/:id'
})
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html',
})
export class ProductInfoPage {

  item: Product = {author: '', state: 'remote'} as Product;

  result: Observable<AppVersion>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpServiceProvider,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              private store: Store<AppVersion>) {
    this.result = this.store.pipe(select('appVersion'));
  }

  ionViewDidLoad() {
    WebCallApp("TabbarHiddent");
    console.log('ionViewDidLoad ProductInfoPage');
  }

  ionViewWillEnter() {
    WebCallApp("TabbarHiddent");
    //TODO 将购买和商品信息分成两个接口请求
    this.result.subscribe(appversion => {
      let {id} = this.navParams.data;
      this.httpService.getProductById(id, appversion.token,).subscribe(item => {
        this.item = {...this.item, ...item,};
        let {isbn} = this.item;
        let serialGetBookState = serialNumber();
        WebCallApp('GetBookState', {isbn}, serialGetBookState).subscribe(({sn, data: bookState}) => {
          if (sn == serialGetBookState) {
            let {downloadState,} = JSON.parse(decodeURIComponent(bookState));
            console.log(downloadState);
            if (downloadState && downloadState == '8') {
              this.item.state = 'local';
            }
          }
        });
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
    this.result.subscribe(appversion => {
      if (appversion.touristsState == '1') {
        this.alertCtrl.create({
          message: '登录后才可购买',
          buttons: [{
            text: '登录',
            handler: () => {
              WebCallApp('UserLogout');
            }
          },
            {text: '取消'}
          ]
        }).present();
      } else {
        let {id} = this.item;
        this.navCtrl.push('OrderPage', {id},).catch(e => console.log(e));
      }
    });
  }

  download() {
    // let getNetworkState = serialNumber();
    console.log('CmdDownloadBook');
    WebCallApp("CmdDownloadBook",
      {isbn: this.item.isbn, book: this.item, nonWifi: "0"},
      "MsgUpdateBookState").subscribe(({sn, data: res}) => {
        console.log(sn);
        console.log(res);
      if (sn == "MsgUpdateBookState") {
        let result = JSON.parse(decodeURIComponent(res));
        console.log(result);
      }
    });
  }

  readOnline() {
    let {isbn, path} = this.item;
    this.result.subscribe(appversion => {
      if (this.isTextBook()) {
        WebCallApp("CmdOpenUrl", {url: onlineReadUrl + `?isbn=${isbn}&token=${appversion.token}`});
      } else if (this.isDisease()) {
        console.log(path);
        this.modalCtrl.create(WebPage, {url: path}).present();
      }
    });
  }

  readLocal() {
    let {isbn, textbook} = this.item;
    this.result.subscribe(appversion => {
      let args = {
        isbn: isbn,
        static: "1",
        book: this.item
      };
      if (textbook == "1") {
        WebCallApp("CmdOpenPDFBook", args);
      } else {
        WebCallApp("CmdOpenUrl", {url: onlineReadUrl + `?isbn=${isbn}&token=${appversion.token}`});
      }
    });
  }

  isPdf() {
    return this.item['textbook'] === '1'//PDF
  }

  isTextBook() {
    return this.item['textbook'] === '0' && this.item['textbookType'] === '0'//教材
  }

  isDisease() {
    return this.item['textbook'] === '2'//疾病教程
  }

  isExamRst() {
    return this.item['textbook'] === '3'//通关包
  }


  goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop().catch();
    } else {
      WebCallApp("CmdGoBack");
    }
  }

  cash() {
    return parseFloat(this.item['price']) / 10
  }
}
