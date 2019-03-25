import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Store} from "@ngrx/store";
import {WebCallAppProvider} from "../../providers/web-call-app/web-call-app";
import {SubjectAction} from "../../components/store/subject/SubjectAction";
import {Subject} from "../../components/Subject";

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
  subjects = [
    {
      key: "internal",
      name: "内科",
    },
    {
      key: "surgery",
      name: "外科",
    },
    {
      key: "chinese",
      name: "中医科",
    },
    {
      key: "gynaecology",
      name: "妇产科",
    },
    {
      key: "pediatrics",
      name: "儿科",
    },
    {
      key: "general",
      name: "全科",
    },
    {
      key: "assistant",
      name: "助理全科",
    },
    {
      key: "imaging",
      name: "放射科",
    },
    {
      key: "ophthalmology",
      name: "眼科",
    },
    {
      key: "otorhinolaryngology",
      name: "耳鼻咽喉科",
    },
    {
      key: "anesthesia",
      name: "麻醉科",
    },
    {
      key: "ultrasound",
      name: "超声医学科",
    },
    {
      key: "neurology",
      name: "神经内科",
    },
    {
      key: "emergency",
      name: "急诊科",
    },
    {
      key: "orthopaedics",
      name: "骨科",
    },
    {
      key: "psychiatry",
      name: "精神科",
    },
    {
      key: "dermatology",
      name: "皮肤科",
    },
    {
      key: "neurosurgery",
      name: "外科（神经外科方向）",
    },
    {
      key: "cardiothoracic",
      name: "外科（胸心外科方向）",
    },
    {
      key: "urinary",
      name: "外科（泌尿外科方向）",
    },
    {
      key: "plastic",
      name: "外科（整形外科方向）",
    },
    {
      key: "pediatric",
      name: "儿外科",
    },
    {
      key: "nuclear",
      name: "临床病理科",
    },
    {
      key: "genetic",
      name: "检验医学科",
    },
    {
      key: "nuclearmedicine",
      name: "核医学科",
    },
    {
      key: "genetics",
      name: "医学遗传科",
    },
    {
      key: "oral",
      name: "口腔全科",
    },
    {
      key: "oralinternal",
      name: "口腔内科",
    },
    {
      key: "maxillofacial",
      name: "口腔颌面外科",
    },
    {
      key: "prosthodontics",
      name: "口腔修复科",
    },
    {
      key: "orthodontics",
      name: "口腔正畸科",
    },
    {
      key: "pathology",
      name: "口腔病理科",
    },
    {
      key: "maxillofacialimaging",
      name: "口腔颌面影像科",
    },
    {
      key: "prevention",
      name: "预防医学科",
    },
    {
      key: "radiotherapy",
      name: "放射肿瘤科",
    },
    {
      key: "rehabilitation",
      name: "康复医学",
    }
  ];

  x = 'internal';

  y = 0;

  expend = false;

  own: string[] = [];

  constructor(private navCtrl: NavController,
              private webCallAppProvider: WebCallAppProvider,
              private store: Store<Subject>) {
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ProductPanelPage');
  }

  goBack() {
    if (this.navCtrl.canGoBack()) {
      this.navCtrl.push('HomePage').catch();
    } else {
      this.webCallAppProvider.WebCallApp("CmdGoBack");
    }
  }

  setSubject(index) {
    this.x = index;
    this.store.dispatch(new SubjectAction(index));
  }

  change() {
    this.expend = !this.expend;
  }

  locate() {
    this.navCtrl.push('product-list', {title: '考试培训', key: 'exam-rst'}).catch();
  }

}
