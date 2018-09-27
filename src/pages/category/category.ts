import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {WebPage} from "../web/web";

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  menus: Object[] = [
    {
      name: '5+3教材',
      key: '5p3',
      list: [
        {
          name: '56本教材',
          key: '5p3-all'
        }
      ]
    },
    {
      name: '学习套餐',
      key: 'learn',
      list: [
        {
          name: '52门全套',
          key: 'learn-52',
        }, {
          name: '基础课程',
          key: 'learn-base',
        }, {
          name: '临床课程',
          key: 'learn-exercise',
        }, {
          name: '公共课程',
          key: 'learn-common',
        }, {
          name: '开学季199/年教材套餐',
          key: 'learn-year',
        }, {
          name: '入培学习包',
          key: 'learn-entrance',
        },
      ]
    },
    {
      name: '西医图书',
      key: 'west',
      list: [
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
      name: '中医图书',
      key: 'chinese',
      list: [
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
    {
      name: '疾病诊疗教程',
      key: 'disease'
    },
    {
      name: '医学数据库',
      key: 'database',
    },
    {
      name: '师资培训',
      key: 'none',
      list: [
        {
          name: '2018年住陪高峰论坛',
          type: 'url',
          url: 'https://mall.imed.org.cn/ui/phone/activities.html#/activity/20180901'
        }
      ]
    },
    {
      name: '手术视频',
      type: 'multi-column',
      key: 'operation',
      list: [
        {
          title: '全部学科',
          list: [
            {
              name: '普通外科',
              key: 'operation-operation',
            }, {
              name: '普通外科',
              key: 'operation-operation',
            }, {
              name: '普通外科',
              key: 'operation-operation',
            }, {
              name: '普通外科',
              key: 'operation-operation',
            }, {
              name: '普通外科',
              key: 'operation-operation',
            }, {
              name: '普通外科',
              key: 'operation-operation',
            },
          ]
        },
        {
          title: '全部类别',
          list: [
            {
              name: '当代医学名家经典手术',
              key: 'operation-operation',
            },
            {
              name: '住陪手术与操作规范',
              key: 'operation-operation',
            }
          ]
        }
      ]
    },
    {
      name: '考试培训',
      key: 'exam',
      list: [
        {
          name: '住培结业理论通关包',
          key: 'exam-rst',
        }, {
          name: '执业医师/执业助理医师通关包',
          key: 'exam-practice',
        }, {
          name: '住培结业技能通关包',
          key: 'exam-skill',
        }
      ]
    },
    {
      name: '免费专区',
      key: 'free',
      list: [
        {
          name: '全部',
          key: 'free-all',
        }
      ]
    },
    {
      name: '会员年卡',
      key: 'year',
      list: [
        {
          name: '学科-109/209/309年卡',
          key: 'year-subject',
        }
      ]
    }
  ];
  subMenus: Object = this.menus[0];

  modal;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  goBack() {
    this.navCtrl.pop({direction: 'forward'}).catch();
  }

  selectMenu(index) {
    this.subMenus = this.menus[index]
  }

  navigate(item) {
    if (item['type'] == 'url') {
      this.navCtrl.push('WebPage', {browser: {title: item['name'], url: item['url']}}).catch();
    }
  }

  goToPage({name: title, key, type, url}) {
    console.log(title);
    if (type == 'url') {
      // this.navCtrl.push('WebPage', {browser: {title, url,}}).catch();
      this.modalCtrl.create(WebPage, {browser: {title, url,}}).present().catch();
    } else {
      this.navCtrl.push('ProductPage', {title, key}).catch();
    }
  }
}
