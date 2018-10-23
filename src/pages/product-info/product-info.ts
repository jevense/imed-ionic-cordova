import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import WebCallApp, {exactInfoFromRes, onlineReadUrl, serialNumber, type1Array, type2Array} from "../../app/global";

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

  result = {token: '', platform: ''};

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
    let {id} = this.navParams.data;
    let {token} = this.result;
    this.httpService.getProductById(id, token,).subscribe(item => {
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
      let {id} = this.item;
      this.navCtrl.push('OrderPage', {id},).catch(e => console.log(e));
    }
  }

  download() {
    let getNetworkState = serialNumber();
    WebCallApp("GetNetworkState", {}, getNetworkState).subscribe(({sn, data: res}) => {
      if (sn == getNetworkState) {
        // let result = exactInfoFromRes(res);//TODO
      }
    });
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
    WebCallApp("CmdDownloadBook", {isbn: this.item.isbn, book: this.item, nonWifi: "0"});
  }

  readOnline() {
    let {isbn} = this.item;
    let {token} = this.result;
    WebCallApp("CmdOpenUrl", {url: onlineReadUrl + `?isbn=${isbn}&token=${token}`});
  }

  readLocal() {
    let {isbn, textbook} = this.item;
    let {token} = this.result;
    let args = {
      isbn: isbn,
      static: "1",
      book: this.item
    };
    if (textbook == "1") {
      WebCallApp("CmdOpenPDFBook", args);
    } else {
      WebCallApp("CmdOpenUrl", {url: onlineReadUrl + `?isbn=${isbn}&token=${token}`});
    }
  }

  isPdf() {
    return this.item['textbook'] === '1'
  }

  isTextBook() {
    return this.item['textbook'] === '0' && this.item['textbookType'] === '0'
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
