import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {onlineReadUrl, serialNumber, type1Array, type2Array} from "../../app/global";
import {Product} from "../../components/Product";
import {AppVersion} from "../../components/AppVersion";
import {Observable} from "rxjs/Observable";
import {select, Store} from "@ngrx/store";
import {WebPage} from "../web/web";
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";

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
              public webCallAppProvider: WebCallAppProvider,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              private store: Store<AppVersion>) {
    this.result = this.store.pipe(select('appVersion'));
  }

  ionViewDidLoad() {
    this.webCallAppProvider.WebCallApp("TabbarHiddent");
    console.log('ionViewDidLoad ProductInfoPage');
  }

  ionViewWillEnter() {
    this.webCallAppProvider.WebCallApp("TabbarHiddent");
    //TODO 将购买和商品信息分成两个接口请求
    this.result.subscribe(appversion => {
      let {id} = this.navParams.data;
      this.httpService.getProductById(id, appversion.token,).subscribe(item => {
        this.item = {...this.item, ...item,};
        let {isbn} = this.item;
        let serialGetBookState = serialNumber();
        this.webCallAppProvider.WebCallApp('GetBookState', {isbn}, serialGetBookState).subscribe(({sn, data: bookState}) => {
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
          title: '温馨提示',
          message: '尊敬的书包用户，您即将以游客模式进行购买，清除缓存或卸载重装等将导致无法再查看所购产品。为保障您的虚拟财产，请您及时登录电子书包账号。',
          buttons: [{
            text: '登录',
            handler: () => {
              this.webCallAppProvider.WebCallApp('UserLogout');
            }
          }, {
            text: '继续购买',
            handler: () => {
              let {id} = this.item;
              this.navCtrl.push('OrderPage', {id},).catch(e => console.log(e));
            }
          }]
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
    this.webCallAppProvider.WebCallApp("CmdDownloadBook",
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
        this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url: onlineReadUrl + `?isbn=${isbn}&token=${appversion.token}`});
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
        this.webCallAppProvider.WebCallApp("CmdOpenPDFBook", args);
      } else {
        this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url: onlineReadUrl + `?isbn=${isbn}&token=${appversion.token}`});
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
      this.webCallAppProvider.WebCallApp("CmdGoBack");
    }
  }

  cash() {
    return parseFloat(this.item['price']) / 10
  }
}
