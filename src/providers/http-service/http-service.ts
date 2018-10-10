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
  busUrl = 'http://192.168.9.9:8080/bus/services';

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

  getProductById(id: string) {
    return this.get(`${this.url}/${id}`)
  }

  postBus(body: string) {
    return this.http.post(this.busUrl, body)
  }
}
