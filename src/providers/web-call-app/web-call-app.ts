import {Injectable} from '@angular/core';
import {serialNumber} from "../../app/global";
import {Subject} from "rxjs/Subject";
import {Events} from "ionic-angular";

/*
  Generated class for the WebCallAppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebCallAppProvider {

  private subject = new Subject();

  constructor(public events: Events) {

    if (!window['Elf']) window['Elf'] = {}; //如果对象没有ELF对象，则初始化
    window['Elf'].AppCallWeb = (sn, data) => {
      console.log(data);
      if (sn == "MsgGoBack") {
        this.events.publish('MsgGoBack');
      } else if (sn == "MsgOpenSuccess") {
        this.events.publish('MsgOpenSuccess', data);
      } else {
        this.subject.next({sn, data});
      }
    };

    console.log('Hello WebCallAppProvider Provider');
  }

  WebCallApp(command, args = {}, sn = serialNumber()) {
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
    return this.subject;
  };

}
