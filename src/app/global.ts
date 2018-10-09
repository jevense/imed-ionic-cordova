import {Subject} from "rxjs/Subject";
import {filter} from "rxjs/operators";

let WebCallApp = (command, args = {}) => {
  let params = {command, args};
  if (window['webkit'] && window['webkit']['messageHandlers']) {
    window['webkit']['messageHandlers']["WebCallApp"]['postMessage'](JSON.stringify(params));
  } else {
    window['Elf']['WebCallApp'](JSON.stringify(params));
  }
  return subject;
};

let subject = new Subject();

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
