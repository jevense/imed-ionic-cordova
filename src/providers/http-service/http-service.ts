import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  url = 'http://192.168.8.144:8092/store/product';
  // url = 'http://123.56.15.197:7152/product';
  // busUrl = 'http://192.168.9.9:8080/bus/services';
  busUrl = 'http://123.56.15.197:5002/services';

  // busUrl = 'http://192.168.8.144:5005/bus/services';

  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }

  //post请求
  post(url: string, body: any = {}): Observable<any> {
    return this.http.post(url, body, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      })
    })
  }

  //get请求
  get(url: string, body: any = {}): Observable<any> {
    return this.http.get(url, {
      headers: new HttpHeaders({
        "Accept": "application/json",
        "Content-Type": "application/json"
      }),
      params: body
    })
  }

  getProductList(category: string, page: number = 0) {
    return this.get(this.url, {page, category,})
  }

  getProductById(id: string, result: string = "") {
    if (result) {
      return this.get(`${this.url}/${id}?token=${result}&type=id`)
    } else {
      return this.get(`${this.url}/${id}`)
    }
  }

  postBus(body: string): Observable<string> {
    return this.http.post(this.busUrl, body, {
      responseType: 'text'
    })
  }
}
