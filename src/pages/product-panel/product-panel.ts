import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {operationOutUrl} from "../../app/global";
import {AppVersion} from "../../components/AppVersion";
import {Observable} from "rxjs/Observable";
import {select, Store} from "@ngrx/store";
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";

/**
 * Generated class for the ProductPanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'product-panel',
})
@Component({
  selector: 'page-product-panel',
  templateUrl: 'product-panel.html',
})
export class ProductPanelPage {

  subject = [
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
    }
  ];

  active = 0;

  contents = [
    {
      name: '基础版通关包介绍',
      introduce: '权威名师参与设计，五大备考学习模块，360度全方位特训，顺利通关结业考',
      items: [
        {
          id: '038aa1521a22483d99c9d2e974e05a0f',
          cover: 'assets/imgs/cover1.png',
          name: '名师精讲课',
          introduce: '高清视频讲解，经典考点点播，帮助学员，拨开迷雾，的见真解',
          originalPrice: '1000',
          status: true,
          price: '800',
        },
        {
          id: '038aa1521a22483d99c9d2e974e05a0f',
          cover: 'assets/imgs/cover2.png',
          name: '精品试卷',
          introduce: '专家甄选试题，大数据分析组卷，有效查漏补缺，检阅知识点盲区',
          originalPrice: '1000',
          price: '800',
        },
        {
          id: '038aa1521a22483d99c9d2e974e05a0f',
          cover: 'assets/imgs/cover3.png',
          name: '精品题库',
          introduce: '覆盖住培各个专业，紧扣考试大纲，百万练习题，自由随练',
          originalPrice: '1000',
          price: '800',
        },
        {
          id: '038aa1521a22483d99c9d2e974e05a0f',
          cover: 'assets/imgs/cover4.png',
          name: '住陪技能考核视频',
          introduce: '权威专家把关，专业团队录制，精准复习技能操作，无忧通关技能考',
          originalPrice: '1000',
          price: '800',
        },
        {
          id: '038aa1521a22483d99c9d2e974e05a0f',
          cover: 'assets/imgs/cover5.png',
          name: '住陪通用教材',
          introduce: '全媒体数字教材，动画、图表、视频多种形式，易学、易记、易用',
          originalPrice: '1000',
          price: '800',
        }
      ]
    },
    {
      name: '拓展版通关包介绍',
      introduce: '培养临床思维能力、提升疾病诊治水平，适配住培各专业全阶段的拓展学习',
      items: [
        {
          id: '038aa1521a22483d99c9d2e974e05a0f',
          cover: 'assets/imgs/cover1.png',
          name: '疾病诊疗教程',
          introduce: '遵循临床路径，以诊治过程为主线，全方位讲解，精准指导诊疗每一环节',
          originalPrice: '1000',
          price: '800',
        },
        {
          id: '038aa1521a22483d99c9d2e974e05a0f',
          cover: 'assets/imgs/cover2.png',
          name: '三基随手查数据库',
          introduce: '5500万字海量内容、随时随地、随手查询，住培备考必备神器',
          originalPrice: '1000',
          price: '800',
        },
        {
          id: '038aa1521a22483d99c9d2e974e05a0f',
          cover: 'assets/imgs/cover3.png',
          name: '临床思维训练',
          introduce: '整合诊疗思维与临床实践，教学练考评五位一体，显著提升胜任能力',
          originalPrice: '1000',
          price: '800',
        }
      ]
    }
  ];

  subActiveKey;

  expend = false;

  own = ['038aa1521a22483d99c9d2e974e05a0f'];

  result: Observable<AppVersion>;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              public webCallAppProvider: WebCallAppProvider,
              private store: Store<AppVersion>) {
    this.result = this.store.pipe(select('appVersion'));
  }

  ngOnInit() {
    console.log('ionViewDidLoad ProductPanelPage');
  }

  goBack() {
    this.navCtrl.pop().catch();
  }

  goToPage({name: title, type, key, token, url, list}) {
    this.subActiveKey = key;
  }

  switch(index) {
    this.active = index;
  }

  change() {
    this.expend = !this.expend;
  }

  buy(id) {
    this.navCtrl.push('product-info', {id}).catch();
  }

  learn(id) {
    this.result.subscribe(appversion => {
      this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url: operationOutUrl + `?token=${appversion.token}&type=1&productId=ce956d1f7e7a42109f53b233e7036359`});
    })
  }

  locate() {
    this.navCtrl.push('product-list', {title: '考试培训', key: 'exam-rst'}).catch();
  }

}
