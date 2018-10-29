import {Component} from '@angular/core';
import {IonicPage, NavController, Refresher} from 'ionic-angular';
import WebCallApp, {operationOutInfoUrl, operationOutUrl, searchUrl} from "../../app/global";
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {Product} from "../../components/Product";
import {select, Store} from "@ngrx/store";
import {AppVersion} from "../../components/AppVersion";
import {Observable} from "rxjs/Observable";
import {ForkJoinObservable} from "rxjs/observable/ForkJoinObservable";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  topMenus: Object[] = [
    [
      {
        'icon-name': '5p3', key: '5p3-all', name: '数字教材',
        subList: [
          {
            name: '全部',
            key: '5p3-all',
          }, {
            name: '临床',
            key: '5p3-clinical',
          }, {
            name: '基础',
            key: '5p3-base',
          }, {
            name: '公共',
            key: '5p3-common',
          }, {
            name: '病例',
            key: '5p3-case',
          }, {
            name: '套餐',
            key: 'learn-all',
          }
        ]
      },
      {
        'icon-name': 'learn', key: 'exam-rst', name: '考试培训',
      },
      {
        'icon-name': 'operation',
        type: 'url',
        key: 'operation-all',
        name: '手术视频',
        url: 'https://thesurgery.imed.org.cn/cst-phone/ui/index.html'
      },
      {
        'icon-name': 'disease',
        name: '疾病教程', type: 'list', key: 'disease-all'
      },
      {
        'icon-name':
          'year', key:
          'year-all', name:
          '会员年卡'
      }
      ,
    ],
    [
      {
        'icon-name': 'west', key: 'west-all', name: '西医图书',
        subList: [
          {
            name: '全部',
            key: 'west-all',
          }, {
            name: '药学',
            key: 'west-med',
          }, {
            name: '专著',
            key: 'west-monograph',
          }, {
            name: '考试',
            key: 'west-exam',
          }, {
            name: '科普',
            key: 'west-science',
          }, {
            name: '教辅',
            key: 'west-assistant',
          }, {
            name: '其他',
            key: 'west-other',
          },
        ]
      },
      {
        'icon-name': 'chinese', key: 'chinese-all', name: '中医图书',
        subList: [
          {
            name: '全部',
            key: 'chinese-all'
          }, {
            name: '中医典籍',
            key: 'chinese-classic'
          }, {
            name: '中医专著',
            key: 'chinese-monograph'
          }, {
            name: '中医科普',
            key: 'chinese-science'
          }]
      },
      {'icon-name': 'magazine', key: 'magazine-all', name: '毕教杂志'},
      {
        'icon-name': 'database',
        key: 'database-all',
        name: '数据库',
        type: 'url',
        url: 'https://mshuju.mvwchina.com',
      },
      {'icon-name': 'free', key: 'free-all', name: '免费专区'},
    ]
  ];
  topBags: Product[] = [];
  topDisease: Product[] = [];
  topWest: Product[] = [];
  topOperation: Product[] = [];
  carousel = [];
  slideBags: Object[] = [];

  result: Observable<AppVersion>;

  constructor(public navCtrl: NavController,
              public httpService: HttpServiceProvider,
              private store: Store<AppVersion>) {
    this.result = this.store.pipe(select('appVersion'));
  }

  ionViewDidLoad() {
    this.getData();
    console.log('ionViewDidLoad ProductInfoPage');
  }

  ionViewWillEnter() {
    WebCallApp("TabbarShow");
  }

  doRefresh(refresher: Refresher) {
    console.log('Begin async operation', refresher);
    this.getData(refresher);
  }

  goToCategoryPage() {
    WebCallApp("TabbarHiddent");
    this.navCtrl.push('CategoryPage', {}, {direction: 'back'}).catch();
  }

  openOperations() {
    this.result.subscribe(appversion => {
      WebCallApp("CmdOpenUrl", {url: operationOutUrl + `?token=${appversion.token}&type=1&productId=ce956d1f7e7a42109f53b233e7036359`});
    })
  }

  openOperation({isbn}) {
    this.result.subscribe(appversion => {
      WebCallApp("CmdOpenUrl", {url: operationOutInfoUrl + `?productVideoId=${isbn}&type=3&token=${appversion.token}`});
    })
  }

  locateInfo({id}) {
    WebCallApp("TabbarHiddent");
    this.navCtrl.push('product-info', {id,}).catch();
  }

  locateList({name: title, key, subList,}) {
    WebCallApp("TabbarHiddent");
    this.navCtrl.push('product', {title, key, data: subList}).catch();
  }

  search() {
    this.result.subscribe(appversion => {
      WebCallApp("CmdOpenUrl", {url: searchUrl + `?token=${appversion.token}`});
    })
  }

  locate({url, name: title, key, subList, type = 'list'}) {
    if (key == 'year-all') return;
    switch (type) {
      case 'url': {
        if (key == 'operation-all') {
          this.result.subscribe(appversion => {
            WebCallApp("CmdOpenUrl", {url: url + `?token=${appversion.token}`});
          })
        } else {
          WebCallApp("CmdOpenUrl", {url: url});
        }
        break;
      }
      case 'list': {
        WebCallApp("TabbarHiddent");
        this.navCtrl.push('product', {title, key, data: subList}).catch();
        break;
      }
    }
  }

  getData(refresher?) {
    ForkJoinObservable.create(
      this.httpService.getSwiper(),
      this.httpService.getCarouselList(),
      this.httpService.getRecommendList(0, 3),
      this.httpService.getDiseaseList('disease-all', 0, 3),
      this.httpService.getWestList(0, 3),
      this.httpService.getOperationList(0, 2),
    ).subscribe(res => {
      this.slideBags = res[0];
      this.carousel = res[1];
      this.topBags = res[2];
      this.topDisease = res[3];
      this.topWest = res[4];
      this.topOperation = res[5];
      refresher && refresher.complete();
    });
  }
}
