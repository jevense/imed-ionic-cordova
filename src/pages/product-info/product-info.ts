import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import WebCallApp from "../../app/global";
import {filter} from "rxjs/operators";

@IonicPage({
  name: 'page-product-info',
  segment: 'product/:id'
})
@Component({
  selector: 'page-product-info',
  templateUrl: 'product-info.html',
})
export class ProductInfoPage {

  item = {
    id: '',
    name: '结膜切口的眼眶肌锥内海绵状血管瘤摘除',
    cover: 'assets/imgs/bag-1.png',
    author: '孙丰源',
    textbook: '',
    textbookType: '',
    size: '2MB',
    price: '640',
    originPrice: '800',
    briefIntroduction: "12312",
    catalog: "123123",
    owner: true,
  };

  type1Array = ['教材', 'pdf', '教程', '通关包', '执医通关包', '手术视频'];
  type2Array = ['普通教材', '病例分析', '手术', '杂志', '试题', '试题包', '执医通关包', '未知类型'];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpServiceProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    let {id} = this.navParams.data;
    this.httpService.getProductById(id)
      .subscribe(item => {
        this.item = {...item}
      });
    console.log('ionViewDidLoad ProductInfoPage');
  }

  bookType() {
    let textbook = this.item['textbook'];
    if (textbook != '0') {
      return this.type1Array[textbook]
    } else {
      let textbookType = this.item['textbookType'];
      return this.type2Array[textbookType]
    }
  }

  buy(item) {
    WebCallApp("GetAPPVersion")
      .pipe(filter(param => param['sn'] == "GetAPPVersion"))
      .subscribe(({data}) => {
        if (data['touristsState']) {
          this.alertCtrl.create({
            title: '请登录',
            buttons: ['OK']
          }).present();
        } else {
          let {token, productId, platform} = data;
          let {id} = this.item;
          this.navCtrl.push('OrderPage', {token, platform, id},).catch();
        }
      });
  }

  open(item) {
    this.navCtrl.push('EpubReaderPage', {},).catch();
  }

  online() {
    return this.item['owner'] && this.item['textbook'] === '0' && this.item['textbookType'] === '0'
  }

}
