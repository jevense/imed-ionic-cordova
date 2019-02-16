import {Component} from '@angular/core';
import {AlertController, Events, IonicPage, ModalController, NavController, Refresher} from 'ionic-angular';
import {operationOutInfoUrl, operationOutUrl, searchUrl, thesurgery} from "../../app/global";
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {Product} from "../../components/Product";
import {select, Store} from "@ngrx/store";
import {AppVersion} from "../../components/AppVersion";
import {Observable} from "rxjs/Observable";
import {ForkJoinObservable} from "rxjs/observable/ForkJoinObservable";
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";

// import {WebPage} from "../web/web";

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
            name: '培训',
            key: '5p3-case',
          }, {
            name: '套餐',
            key: 'learn-all',
          }
        ]
      },
      {
        'icon-name': 'learn',
        key: 'exam-rst',
        name: '考试培训',
        type: 'panel',
      },
      {
        'icon-name': 'operation',
        type: 'url',
        key: 'operation-all',
        name: '手术视频',
        url: thesurgery
      },
      {
        'icon-name': 'disease',
        name: '疾病教程', type: 'list', key: 'disease-all'
      },
      {
        'icon-name': 'year',
        key: 'year-all',
        name: '会员年卡'
      },
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
      {'icon-name': 'magazine', key: 'magazine', name: '毕教杂志'},
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

  tranning: Object[] = [{
    "id": "3802c560e39d49c1af07a54d4f798886",
    "name": "住院医师规范化培训考核研究与题库建设课题",
    "price": "99990",
    "originPrice": "99990",
    "cover": "https://mall.imed.org.cn/upload/coverImages/zptk01B.jpg",
    "author": "李海潮",
    "size": "50M",
    "isbn": "3802c560e39d49c1af07a54d4f798886",
    "subjects": "其它"
  }];

  result: Observable<AppVersion>;

  constructor(public navCtrl: NavController,
              public httpService: HttpServiceProvider,
              public events: Events,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public webCallAppProvider: WebCallAppProvider,
              private store: Store<AppVersion>) {
    this.result = this.store.pipe(select('appVersion'));
    events.subscribe('MsgGoBack', () => {
      if (this.navCtrl.canGoBack()) {
        this.navCtrl.pop().catch(e => console.log(e));
      } else {
        this.webCallAppProvider.WebCallApp("CmdGoBack");
      }
    });
  }

  ionViewDidLoad() {
    this.getData();
    console.log('ionViewDidLoad ProductInfoPage');
  }

  ionViewWillEnter() {
    this.webCallAppProvider.WebCallApp("TabbarShow");
  }

  doRefresh(refresher: Refresher) {
    console.log('Begin async operation', refresher);
    this.getData(refresher);
  }

  goToCategoryPage() {
    this.webCallAppProvider.WebCallApp("TabbarHiddent");
    this.navCtrl.push('CategoryPage', {}, {direction: 'back'}).catch();
  }

  openOperations() {
    this.result.subscribe(appversion => {
      this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url: operationOutUrl + `?token=${appversion.token}&type=1&productId=ce956d1f7e7a42109f53b233e7036359`});
    })
  }

  openOperation({isbn}) {
    this.result.subscribe(appversion => {
      this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url: operationOutInfoUrl + `?productVideoId=${isbn}&type=3&token=${appversion.token}`});
    })
  }

  locateInfo({id}) {
    this.webCallAppProvider.WebCallApp("TabbarHiddent");
    this.navCtrl.push('product-info', {id,}).catch();
  }

  locateList({name: title, key, subList,}) {
    this.webCallAppProvider.WebCallApp("TabbarHiddent");
    this.navCtrl.push('product', {title, key, data: subList}).catch();
  }

  search() {
    this.result.subscribe(appversion => {
      this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url: searchUrl + `?token=${appversion.token}`});
    })
  }

  locate({url, name: title, key, subList, type = 'list'}) {
    if (key == 'year-all') return;
    switch (type) {
      case 'url': {
        let args: any = {url,};

        if (key == 'https://thesurgery.imed.org.cn/cst-phone/ui/shizi/shiziList.html?productId=d6ef9865357e4760b6c20e867b1b76b2') {
          this.result.subscribe(appversion => {
            this.webCallAppProvider.WebCallApp("CmdOpenUrl", {
              url: `${url}&token=${appversion.token}`,
            });
          });
          return;
        } else if (key != "operation-all") {
          args.name = title;
          args.navigation = true;
          args.static = '1'
        }

        this.webCallAppProvider.WebCallApp("CmdOpenUrl", args);
        break;
      }
      case 'panel': {
        this.webCallAppProvider.WebCallApp("TabbarHiddent");
        this.navCtrl.push('product-panel').catch();
        break;
      }
      case 'list': {
        this.webCallAppProvider.WebCallApp("TabbarHiddent");
        this.navCtrl.push('product', {title, key, data: subList}).catch();
        break;
      }
      case 'info': {
        this.webCallAppProvider.WebCallApp("TabbarHiddent");
        this.navCtrl.push('product-info', {id: key}).catch();
        break;
      }
    }
  }

  getData(refresher?) {
    ForkJoinObservable.create(
      this.httpService.getSwiper(),
      this.httpService.getCarouselList(),
      this.httpService.getRecommendList("", 0, 3),
      this.httpService.getDiseaseList('disease-all', "", 0, 3),
      this.httpService.getWestList("", 0, 3),
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
