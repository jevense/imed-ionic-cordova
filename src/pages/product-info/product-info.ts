import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import WebCallApp, {exactInfoFromRes, onlineReadUrl, serialNumber, type1Array, type2Array} from "../../app/global";
import {Product} from "../../components/Product";
import {AppVersion} from "../../components/AppVersion";
import {Observable} from "rxjs/Observable";
import {select, Store} from "@ngrx/store";

@IonicPage({
  name: 'product-info',
  segment: 'product/:id'
})
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html',
})
export class ProductInfoPage {

  item: Product = {author: ''} as Product;

  result: Observable<AppVersion>;

  state = 'remote';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpServiceProvider,
              public alertCtrl: AlertController,
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
            let result = exactInfoFromRes(bookState);
            console.log(result);
            if (result['state'] == '8') {
              this.item['state'] = 'local';
            } else {
              this.item['state'] = 'remote';
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
    WebCallApp("CmdDownloadBook", {isbn: this.item.isbn, book: this.item, nonWifi: "0"});
    // WebCallApp("GetNetworkState", {}, getNetworkState).subscribe(({sn, data: res}) => {
    //   if (sn == getNetworkState) {
    //     // let result = exactInfoFromRes(res);//TODO
    //   }
    // });
    // function (result) {
    //   if (result.result.network == "2") {
    //     Elf.components.confirm({
    //       title: "正在使用非Wi-Fi网络下载",
    //       text: "非Wi-Fi下载将产生流量费用",
    //       minWidth: "240px",
    //       buttons: {
    //         "确定": function () {
    //           args.nonWifi = "1";
    //           WebCallApp("CmdDownloadBook", args);
    //           bookData.downloadState = 1;
    //           Elf.AppCallWeb("MsgUpdateBookState", JSON.stringify(bookData));
    //         },
    //         "取消": function () {
    //         }
    //       }
    //     });
    //   } else if (result.result.network == "0" || result.result.network == "1") {
    //     //无网络
    //     Elf.components.toast({text: "当前无网络"});
    //   } else {
    //     //wifi
    //     WebCallApp("CmdDownloadBook", args);
    //     bookData.downloadState = 1;
    //     Elf.AppCallWeb("MsgUpdateBookState", JSON.stringify(bookData));
    //   }
    // });
  }

  readOnline() {
    let {isbn, path} = this.item;
    this.result.subscribe(appversion => {
      if (this.isTextBook()) {
        WebCallApp("CmdOpenUrl", {url: onlineReadUrl + `?isbn=${isbn}&token=${appversion.token}`});
      } else if (this.isDisease()) {
        WebCallApp("CmdOpenUrl", {url: path});
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
    return this.item['textbook'] === '1'
  }

  isTextBook() {
    return this.item['textbook'] === '0' && this.item['textbookType'] === '0'
  }

  isDisease() {
    return this.item['textbook'] === '2'
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
