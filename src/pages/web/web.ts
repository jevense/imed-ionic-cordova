import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-web',
  templateUrl: 'web.html',
})
export class WebPage {

  config = {
    url: '', // 安全链接
    title: '加载中',
  };

  progress: number = 0; // 网页访问的进度条
  isLoaded: boolean = false;
  secUrl;
  history = [];

  @ViewChild('iframe')
  todoName: ElementRef;

  constructor(public viewCtrl: ViewController,
              private params: NavParams,
              private sanitizer: DomSanitizer
  ) {


    this.config = {
      ...this.config,
      url: this.params.get('url'),
      title: this.params.get('title'),
    };
    this.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.url);
    // this.secUrl = this.config.url;

    // let backAction = this.platform.registerBackButtonAction(() => {
    //   backAction();
    // }, 2);
    window.addEventListener('message', this.microAppCall);
  }

  ionViewDidLoad() {
    this.onProgress();
    this.todoName.nativeElement.contentWindow.onhashchange = () => {
      this.history.push('1')
    }
  }

  ionViewDidLeave() {
    window.removeEventListener('message', this.microAppCall);
  }

  microAppCall({data}) { // 接收iframe中发送过来的数据
    if (data.msgType == 'refresh') {
      // this.reload();
    } else if (data.msgType == 'close') {
    }
  }


  // 网页访问进度
  onProgress() {
    let [min, max, progressMax, period] = [1, 20, 90, 100];//最小步长,最大步长,最大进度,刷新周期
    let timer = setInterval(() => {
      if (this.isLoaded) clearTimeout(timer);
      let step = Math.floor(Math.random() * (max - min) + min);//1-20随机步长
      this.progress += Math.min(progressMax - this.progress, step);//最大可增步长和预期步长取最小值
    }, period);
  }

  // 如果iframe页面加载成功后
  loaded() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  }

  back() {
    if (this.history.pop()) {
      window.history.back();
    } else {
      this.close();
    }
  }

  close() {
    this.viewCtrl.dismiss().catch()
  }
}
