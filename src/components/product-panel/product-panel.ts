import {Component, Input} from '@angular/core';
import {AppVersion} from "../store/app-version/AppVersion";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";
import {operation2019Url, rstExamUrl} from "../../app/global";
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {select, Store} from "@ngrx/store";
import {Subject} from "../Subject";

/**
 * Generated class for the ProductPanelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-panel-component',
  templateUrl: 'product-panel.html'
})
export class ProductPanelComponent {

  subject: Subject;

  @Input()
  subjectCode: string;

  y = 0;

  contents = [
    {
      name: '基础版通关包介绍',
      introduce: '权威名师参与设计，五大备考学习模块，360度全方位特训，顺利通关结业考',
      items: [
        {
          key: 'paper',
          cover: 'assets/imgs/cover2.png',
          name: '精品试卷',
          introduce: '专家甄选试题，大数据分析组卷，有效查漏补缺，检阅知识点盲区',
        },
        {
          key: 'bank',
          cover: 'assets/imgs/cover3.jpg',
          name: '权威题库',
          introduce: '覆盖住培各个专业，紧扣考试大纲，百万练习题，自由随练',
        },
        {
          key: 'video',
          cover: 'assets/imgs/cover4.png',
          name: '住培技能考核视频',
          introduce: '权威专家把关，专业团队录制，精准复习技能操作，无忧通关技能考',
        },
        {
          id: '5763d1a30cf2161635635e6h',
          key: 'teach',
          cover: 'assets/imgs/cover5.png',
          name: '住培通用教材',
          introduce: '全媒体数字教材，动画、图表、视频多种形式，易学、易记、易用',
          enable: true,
          price: 1000,
        },
        {
          key: 'course',
          cover: 'assets/imgs/cover1.png',
          name: '名师精讲课',
          introduce: '高清视频讲解，经典考点点播，帮助学员，拨开迷雾，的见真解',
        },
      ]
    },
    {
      name: '拓展版通关包介绍',
      introduce: '培养临床思维能力、提升疾病诊治水平，适配住培各专业全阶段的拓展学习',
      items: [
        {
          key: 'disease',
          cover: 'assets/imgs/cover7.jpg',
          name: '疾病诊疗教程',
          introduce: '遵循临床路径，以诊治过程为主线，全方位讲解，精准指导诊疗每一环节',
        },
        {
          key: 'search',
          cover: 'assets/imgs/cover8.jpg',
          name: '三基随手查数据库',
          introduce: '5500万字海量内容、随时随地、随手查询，住培备考必备神器',
        }
      ]
    }
  ];

  own: string[] = [];

  token: string;

  constructor(private navCtrl: NavController,
              public navParams: NavParams,
              public httpService: HttpServiceProvider,
              private webCallAppProvider: WebCallAppProvider,
              private appVersionStore: Store<AppVersion>,
              public alertCtrl: AlertController,
              private store: Store<Subject>) {
    this.appVersionStore.pipe<AppVersion>(select('appVersion')).subscribe(appversion => {
      this.token = appversion.token;
      this.httpService.getExamRstList(this.token, '2019').subscribe(ids => {
        this.own.push(...ids);
      });
    });
    this.store.pipe<Subject>(select('subject')).subscribe(subject => {
      this.subject = subject;
    });
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ProductPanelPage');
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.pop().catch();
    } else {
      this.webCallAppProvider.WebCallApp("CmdGoBack");
    }
  }

  switch(index) {
    this.y = index;
  }

  buy(id, event?) {
    event && event.stopPropagation();
    this.navCtrl.push('product-info', {id}).catch();
  }

  learn(id, key, extendId, event?) {
    event && event.stopPropagation();
    if (key == 'paper' || key == 'bank') {
      let url = rstExamUrl + `?token=${this.token}&packageId=${extendId}&platform=ebook&skillbook=2019&newebook=1`;
      let array = [];
      if (this.own.includes(this.subject['paper']['id'])) {
        array.push(1);
      }
      if (this.own.includes(this.subject['bank']['id'])) {
        array.push(2);
      }
      url += `&purchased=${JSON.stringify(array)}`;
      this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url,});
    } else if (key == 'video') {
      let url = operation2019Url + `?token=${this.token}&productId=${id}`;
      this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url,});
    } else if (key == 'teach') {
      this.alertCtrl.create({
        title: '请到书架-已获得图书中查看',
        buttons: ['确定']
      }).present();
    } else if (key == 'disease') {
      this.navCtrl.push('product-list', {
        title: "疾病教程",
        key: `disease-${this.subjectCode}`
      }).catch();
    }
  }

  detail(sub) {
    if (sub.key === 'video') {
      let id = this.subject[sub.key]['id'];
      let url = operation2019Url + `?token=${this.token}&productId=${id}`;
      this.webCallAppProvider.WebCallApp("CmdOpenUrl", {url,});
    }
  }

  entity(sub) {
    if (sub.enable) return sub;
    return this.subject[sub.key];
  }

  buyDisable(sub) {
    if (sub.enable) return false;
    return !this.subject[sub.key]['status'];
  }
}
