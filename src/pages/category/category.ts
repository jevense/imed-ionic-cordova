import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {operationOutUrl, shizi} from "../../app/global";
import {select, Store} from "@ngrx/store";
import {AppVersion} from "../../components/AppVersion";
import {Observable} from "rxjs/Observable";
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";

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
          key: '5763d1a30cf2161635635e63',
          type: 'info',
        }, {
          name: '基础课程',
          key: '5768eade0cf216163564f440',
          type: 'info',
        }, {
          name: '临床课程',
          key: '5768e52d0cf216163564eed7',
          type: 'info',
        }, {
          name: '公共课程',
          key: '5768ec9f0cf216163564f5e8',
          type: 'info',
        }
        // , {
        //   name: '开学季199/年教材套餐',
        //   key: 'learn-year',
        //   type: 'info',
        // }, {
        //   name: '入培学习包',
        //   key: 'learn-entrance',
        //   type: 'info',
        // },
      ]
    },
    {
      name: '西医图书',
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
      list: [
        {
          name: '儿科',
          key: 'disease-pediatrics'
        }, {
          name: '眼科',
          key: 'disease-ophthalmology'
        }, {
          name: '全科',
          key: 'disease-general'
        }, {
          name: '口腔科',
          key: 'disease-oral'
        }, {
          name: '麻醉科',
          key: 'disease-anesthesia'
        }, {
          name: '儿外科',
          key: 'disease-pediatric'
        }, {
          name: '精神科',
          key: 'disease-psychiatry'
        }, {
          name: '妇产科',
          key: 'disease-gynaecology'
        }, {
          name: '神经内科',
          key: 'disease-neurology'
        }, {
          name: '耳鼻咽喉科',
          key: 'disease-otorhinolaryngology'
        }, {
          name: '外科-神经外科方向',
          key: 'disease-neurosurgery'
        }, {
          name: '外科-泌尿外科方向',
          key: 'disease-urinary'
        }, {
          name: '外科-胸心外科方向',
          key: 'disease-cardiothoracic'
        }, {
          name: '外科-整形外科方向',
          key: 'disease-plastic'
        }]
    },
    {
      name: '医学数据库',
      key: 'database',
      list: [
        {
          name: '全部',
          type: 'url',
          url: 'https://mshuju.mvwchina.com'
        }
      ]
    },
    {
      name: '师资培训',
      key: 'none',
      list: [
        {
          name: '2018年住培高峰论坛',
          type: 'url',
          url: 'https://mall.imed.org.cn/ui/phone/activities.html#/activity/20180901'
        },
        {
          name: '师资培训',
          type: 'url',
          token: true,
          url: shizi
        }
      ]
    },
    {
      name: '手术视频',
      type: 'multi-column',
      list: [
        {
          title: '全部类别',
          list: [
            {
              name: '当代医学名家经典手术',
              key: 'de02bad3d4eb4199bd61ef4026c14797',
              type: 'productId',
            },
            {
              name: '住培手术与操作规范',
              key: '4d61f2e189f24267a203761333dd270a',
              type: 'productId',
            },
            {
              name: '专家采访',
              key: 'ce956d1f7e7a42109f53b233e7036359',
              type: 'productId',
            }
          ]
        },
        {
          title: '全部学科',
          list: [
            {
              name: '耳鼻咽喉科',
              key: '0db171231368477bbef74fa0f33fd613',
            }, {
              name: '肿瘤科',
              key: '146f2022d7b54d6ea62da85f2a0c0873',
            }, {
              name: '精神科',
              key: '20094e20aa914a02b02eeb4f50d9dc5c',
            }, {
              name: '肾病学科',
              key: '202704b0c14941bdbfde3f33de7965e1',
            }, {
              name: '急诊医学科',
              key: '203366cb967a47d8a7ac4f2ef445f54b',
            }, {
              name: '妇产科',
              key: '203e9b280d89493cb6f7d60736292f27',
            }, {
              name: '核医学科',
              key: '230dec0c96c9429c89b0dbc6c262c1ac',
            }, {
              name: '康复医学科',
              key: '24a773d19f66475faf3a8642e288d1af',
            }, {
              name: '消化内科',
              key: '30154434d7954246b547f21837230cbc',
            }, {
              name: '整形外科',
              key: '341a17e427d54300959e00f1d07d04a9',
            }, {
              name: '皮肤科',
              key: '347b41f0a7e24b86b07fe3d08e8c6ce2',
            }, {
              name: '骨科',
              key: '3a20bcc70aed45269c5b523193c9d8a2',
            }, {
              name: '放射科',
              key: '3c405c1aa0f94ea58745c58ed9a47d28',
            }, {
              name: '神经外科',
              key: '3d77511854e742d689608dea1f876d67',
            }, {
              name: '眼科',
              key: '43804a4702cd4998bc1f2c8540e3c868',
            }, {
              name: '麻醉科',
              key: '4420210eb2a04d5f8c94b17caa7bcae4',
            }, {
              name: '预防保健科',
              key: '4d9f020ca51747c287b63b30774bdf94',
            }, {
              name: '血液内科',
              key: '56b65dab80f2484da3007e0aa5473969',
            }, {
              name: '内科',
              key: '6114b6c85aea4279b13b6845a11e304b',
            }, {
              name: '超声医学科',
              key: '61ad496e3bde47f196df3d97c89e2d0f',
            }, {
              name: '全科',
              key: '63d6f037bb454897b3acc017cce1fd03',
            }, {
              name: '外科',
              key: '6b8fb7ceacbf4dc0b1c12e3326034272',
            }, {
              name: '神经内科',
              key: '6df23df2824c459cb504f491bf4768c5',
            }, {
              name: '老年病科',
              key: '71095a2b48724b8589f1b06547afb997',
            }, {
              name: '小儿外科',
              key: '7559c720fc254aa781c1fcd13b5eb729',
            }, {
              name: '泌尿外科',
              key: '75da389f51ab418397dc92230f59149e',
            }, {
              name: '胸外科',
              key: '79948e9ff098455db83214b77aece56c',
            }, {
              name: '感染科',
              key: '8329203290584de2b2acf554c9123ebf',
            }, {
              name: '心血管内科',
              key: '8f3303385b4143a085dc9009415273bc',
            }, {
              name: '心脏大血管外科',
              key: '9df131c0bb9d4106ad8eb7f4f3e5b4bd',
            }, {
              name: '烧伤外科',
              key: 'aa6e7d91fcb54af0b5308a9993eda555',
            }, {
              name: '普通外科',
              key: 'be456b8beed74544a90a328bfc140ad9',
            }, {
              name: '儿科学',
              key: 'c453c49d2aa7462e868b12a845c8c6fe',
            }, {
              name: '器官移植',
              key: 'c889c3d6aff54727ae81439f0526b1dd',
            }, {
              name: '呼吸内科',
              key: 'ea2f11ae55984cf6a19b62fb27804070',
            }, {
              name: '口腔科',
              key: 'edbe4c2ae5ee4e71a761dac212d079e6',
            },
          ]
        }
      ]
    },
    {
      name: '考试培训',
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
      list: [
        {
          name: '全部',
          key: 'free-all',
        }
      ]
    }
  ];
  active = 0;
  subActiveKey;
  subMenus: Object = this.menus[0];
  result: Observable<AppVersion>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public  webCallAppProvider: WebCallAppProvider,
              private store: Store<AppVersion>) {
    this.result = this.store.pipe(select('appVersion'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  goBack() {
    this.navCtrl.pop({direction: 'forward'}).catch();
  }

  selectMenu(index) {
    this.active = index;
    this.subMenus = this.menus[index];
  }

  goToPage({name: title, type, key, token, url, list}) {

    this.subActiveKey = key;
    switch (type) {
      case 'url': {
        this.result.subscribe(appversion => {
          if (token) url += `?token=${appversion.token}`;
          this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url,});
        });
        break;
      }
      case 'info': {
        this.navCtrl.push('product-info', {id: key}).catch();
        break;
      }
      case 'list':
      default: {
        this.navCtrl.push('product', {title, key, data: list}).catch();
        break;
      }
    }
  }

  goToOperation({name: title, key, type = 'subjectId'}) {
    this.result.subscribe(appversion => {
      this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url: operationOutUrl + `?token=${appversion.token}&type=1&${type}=${key}`});
    });
  }
}

