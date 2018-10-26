import {Subject} from "rxjs/Subject";
// import {WebPage} from "../pages/web/web";

let WebCallApp = (command, args = {}, sn = serialNumber()) => {
  let params = {command, args, sn};
  if (window['Elf'] && window['Elf']['WebCallApp']) {
    console.log('android');
    window['Elf']['WebCallApp'](JSON.stringify(params));
  } else if (window['webkit'] && window['webkit']['messageHandlers'] && window['webkit']['messageHandlers']["WebCallApp"]) {
    console.log('ios');
    window['webkit']['messageHandlers']["WebCallApp"]['postMessage'](JSON.stringify(params));
  } else {
    if (command == 'CmdOpenUrl') {
      // args['modal'].create(WebPage, {browser: {title: "", url: args['url'],}}).present().catch();
    }
  }
  return subject;
};

let subject = new Subject();


if (!window['Elf']) window['Elf'] = {}; //如果对象没有ELF对象，则初始化
window['Elf'].AppCallWeb = function (sn, data) {
  subject.next({sn, data});
  // if (sn === 'MsgOpenSuccess') {	//支付宝、或微信时需通知一下
  //   let dataJson = JSON.parse(data);
  //   // store.dispatch('paySuccess', {tradeNo: dataJson.tradeNo}).then(res => {
  //   //   router.push(`/product/${res.id}/order/pay-success`,)
  //   // })
  // } else if (sn === 'MsgUpdateBookState') {
  //   data = decodeURIComponent(data);
  //   data = JSON.parse(data);
  //   console.log(data);
  //   WebCallApp({command: "CmdOpenPDFBook", args: {isbn: data.isbn}});
  // } else {
  //   console.log(sn + data)
  // }
};

export const serialNumber = () => {
  return Math.random();
};

export const exactInfoFromRes = (res: string) => {
  let {serviceResult} = JSON.parse(decodeURIComponent(res));
  console.log(serviceResult);
  if (typeof serviceResult == 'string') {
    serviceResult = JSON.parse(serviceResult);
  }
  let result = serviceResult['result'];
  if (typeof result == 'string') {
    result = JSON.parse(result);
  }
  console.log(result);
  return result;
};


export default WebCallApp;

export const type1Array = ['教材', 'pdf', '教程', '通关包', '执医通关包', '手术视频'];
export const type2Array = ['普通教材', '病例分析', '手术', '杂志', '试题', '试题包', '执医通关包', '未知类型'];

// url = 'http://192.168.8.144:8092/store/product';
export const url = 'http://123.56.15.197:7152/product';
export const carouselUrl = 'http://123.56.15.197:7152/home/carousel';
export const recommendUrl = 'http://123.56.15.197:7152/home/recommend';
export const diseaseUrl = 'http://123.56.15.197:7152/home/disease';
export const westUrl = 'http://123.56.15.197:7152/home/west';
export const operationUrl = 'http://123.56.15.197:7152/home/operation';
// busUrl = 'http://192.168.9.9:8080/bus/services';
export const busUrl = 'http://123.56.15.197:5002/services';

export const onlineReadUrl = 'https://wap.imed.org.cn/phone/book.html';
export const searchUrl = 'http://123.56.15.197:7162/phone/searchhome.html';
export const operationOutUrl = 'http://mvw-testing.oss-cn-beijing.aliyuncs.com/cst-phone/ui/list.html';
export const operationOutInfoUrl = 'http://mvw-testing.oss-cn-beijing.aliyuncs.com/cst-phone/ui/commodity.html';
