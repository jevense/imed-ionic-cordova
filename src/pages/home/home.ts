import {Component} from '@angular/core';
import {ModalController, NavController, Refresher} from 'ionic-angular';
import {WebPage} from "../web/web";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  topMenus: Object[] = [
    [
      {'icon-name': '5p3', key: '5p3', name: '5+3教材',},
      {
        'icon-name': 'learn', key: 'learn', name: '学习套餐',
      },
      {'icon-name': 'operation', key: 'operation', name: '手术视频'},
      {'icon-name': 'fee', key: 'fee', name: '免费专区'},
      {'icon-name': 'year', key: 'year', name: '会员年卡'},
    ],
    [
      {
        'icon-name': 'west', key: 'west', name: '西医图书',
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
        'icon-name': 'chinese', key: 'chinese', name: '中医图书',
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
      {'icon-name': 'database', key: 'database', name: '数据库'},
      {'icon-name': 'disease', key: 'disease', name: '疾病教程'},
    ]
  ];
  topBags: Object[] = [
    {name: '全科', cover: 'bag-1.png'},
    {name: '中医科', cover: 'bag-2.png'},
    {name: '辅助判读', cover: 'bag-3.png'},
  ];
  topOperations: Object[] = [
    {
      name: '结膜切口的眼眶肌锥内海绵状血管瘤摘除',
      cover: 'operation-1.png',
      author: '孙丰源',
      subject: '眼科',
      price: '640',
      originPrice: '800'
    },
    {
      name: '胸腔镜下气管食管瘘结',
      cover: 'operation-2.png',
      author: '黄金狮',
      subject: '小儿外科',
      price: '640',
      originPrice: '800'
    },
  ];
  topDocs: Object[] = [
    {
      topTitle: 'doc-sub-title-1.png',
      list: [
        {
          name: '临床执业医师考试通关包实践技能考试',
          url: 'https://mall.imed.org.cn/ui/phone/activities.html#/exam/40288810624e037d01624e03979d0357',
          cover: 'bag-doc-1.png',
        },
        {
          name: '临床执业医师考试综合理论通关包',
          url: 'https://mall.imed.org.cn/ui/phone/activities.html#/exam/40288810624e037d01624e03979d035b',
          cover: 'bag-doc-2.png',
        }
      ]
    },
    {
      topTitle: 'doc-sub-title-2.png',
      list: [
        {
          name: '临床执业助理医师考试通关包实践技能考试',
          url: 'https://mall.imed.org.cn/ui/phone/activities.html#/exam/40288810624e037d01624e03979d035c',
          cover: 'bag-doc-3.png',
        },
        {
          name: '临床执业助理医师考试综合理论通关包',
          url: 'https://mall.imed.org.cn/ui/phone/activities.html#/exam/40288810624e037d01624e03979d035d',
          cover: 'bag-doc-4.png',
        }
      ]
    }
  ];
  slideBags: Object[] = [
    {
      cover: 'slider-1.png',
    },
    {
      cover: 'slider-2.png',
    },
    {
      cover: 'slider-1.png',
    },
  ];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  getItems($event: UIEvent) {

  }

  doRefresh(refresher: Refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

  goToCategoryPage() {
    this.navCtrl.push('CategoryPage', {}, {direction: 'back'}).catch();
  }

  locate(type: string = 'url', {url, name: title, key, subList, id}) {
    // this.navCtrl.push('WebPage', {browser: {title, url: url}}).catch();
    switch (type) {
      case 'url': {
        this.modalCtrl.create(WebPage, {browser: {title, url,}}).present().catch();
        break;
      }
      case 'list': {
        this.navCtrl.push('ProductPage', {title, key, data: subList}).catch();
        break;
      }
      case 'info': {
        this.navCtrl.push('ProductInfoPage', {id}).catch();
        break;
      }
    }

  }

  panEvent($event) {
    // $event.stopPropagation();
  }
}
