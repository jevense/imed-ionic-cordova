import {Subject} from "rxjs/Subject";

let WebCallApp = (command, args = {}) => {
  let params = {command, args};
  if (window['Elf'] && window['Elf']['WebCallApp']) {
    console.log('android');
    window['Elf']['WebCallApp'](JSON.stringify(params));
  } else if (window['webkit'] && window['webkit']['messageHandlers'] && window['webkit']['messageHandlers']["WebCallApp"]) {
    console.log('ios');
    window['webkit']['messageHandlers']["WebCallApp"]['postMessage'](JSON.stringify(params));
  }
  return subject;
};

let subject = new Subject();


if (!window['Elf']) {
  window['Elf'] = {};//如果对象没有ELF对象，则初始化
}
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


export default WebCallApp;

export const type1Array = ['教材', 'pdf', '教程', '通关包', '执医通关包', '手术视频'];
export const type2Array = ['普通教材', '病例分析', '手术', '杂志', '试题', '试题包', '执医通关包', '未知类型'];
