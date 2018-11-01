import {Subject} from "rxjs/Subject";
// import {App} from "ionic-angular";
// import {NavController} from "ionic-angular";

// import {WebPage} from "../pages/web/web";

let WebCallApp = (command, args = {}, sn = serialNumber()) => {
  let params = {command, args, sn};
  if (window['Elf'] && window['Elf']['WebCallApp']) {
    window['Elf']['WebCallApp'](JSON.stringify(params));
  } else if (window['webkit'] && window['webkit']['messageHandlers'] && window['webkit']['messageHandlers']["WebCallApp"]) {
    window['webkit']['messageHandlers']["WebCallApp"]['postMessage'](JSON.stringify(params));
  } else {
    if (command == 'CmdOpenUrl') {
      console.log(command)
    }
  }
  return subject;
};

let subject = new Subject();

if (!window['Elf']) window['Elf'] = {}; //如果对象没有ELF对象，则初始化
window['Elf'].AppCallWeb = (sn, data) => {
  console.log(data);
  if (sn == "MsgGoBack") {
    WebCallApp("WebCallApp")
  } else {
    subject.next({sn, data});
  }

};

export const serialNumber = () => {
  return Math.random().toString();
};

export const exactInfoFromRes = (res: string) => {
  let {serviceResult} = JSON.parse(decodeURIComponent(res));
  if (typeof serviceResult == 'string') {
    serviceResult = JSON.parse(serviceResult);
  }
  let result = serviceResult['result'];
  if (typeof result == 'string') {
    result = JSON.parse(result);
  }
  return result;
};


export default WebCallApp;

export const type1Array = ['教材', 'pdf', '教程', '通关包', '执医通关包', '手术视频'];
export const type2Array = ['普通教材', '病例分析', '手术', '杂志', '试题', '试题包', '执医通关包', '未知类型'];

// url = 'http://192.168.8.144:8092/store/product';
export const url = 'https://api.imed.org.cn/product';
export const carouselUrl = 'https://api.imed.org.cn/home/carousel';
export const recommendUrl = 'https://api.imed.org.cn/home/recommend';
export const diseaseUrl = 'https://api.imed.org.cn/home/disease';
export const westUrl = 'https://api.imed.org.cn/home/west';
export const operationUrl = 'https://api.imed.org.cn/home/operation';
export const swiperUrl = 'https://mall.imed.org.cn/ui/v3.4/swiper.json';
export const busUrl = 'https://services2t.mvwchina.com/services';

export const onlineReadUrl = 'https://wap.imed.org.cn/phone/book.html';
export const searchUrl = 'https://wap.imed.org.cn/yishixueyuan/searchhome.html';
export const operationOutUrl = 'https://thesurgery.imed.org.cn/cst-phone/ui/list.html';
export const operationOutInfoUrl = 'https://thesurgery.imed.org.cn/cst-phone/ui/commodity.html';
