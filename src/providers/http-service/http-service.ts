import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {
  busUrl,
  carouselUrl,
  diseaseUrl,
  host,
  operationUrl,
  recommendUrl,
  rstExamApiUrl,
  subjectsUrl,
  swiperUrl,
  url,
  westUrl
} from "../../app/global";
import {Product} from "../../components/Product";
import {Carousel} from "../../components/Carousel";
import {Status} from "../../components/Status";

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }

  getProductList(category: string,
                 searchText: string = "",
                 page: number = 0,
                 size: number = 10): Observable<Product[]> {
    return this.http.get<Product[]>(url, {
      params: {
        category,
        searchText,
        page: page.toString(),
        size: size.toString(),
      }
    })
  }


  getCarouselList(): Observable<Array<Carousel>> {
    return this.http.get<Array<Carousel>>(carouselUrl)
  }

  getRecommendList(searchText: string = "", page: number = 0, size: number = 10): Observable<Product[]> {
    return this.http.get<Product[]>(recommendUrl, {
      params: {
        searchText,
        page: page.toString(),
        size: size.toString()
      }
    })
  }

  getDiseaseList(category: string = 'disease-all', searchText: string = "", page: number = 0, size: number = 10,): Observable<Product[]> {
    return this.http.get<Product[]>(diseaseUrl, {
      params: {
        category,
        searchText,
        page: page.toString(),
        size: size.toString(),
      }
    })
  }

  getWestList(searchText: string = "", page: number = 0, size: number = 10): Observable<Product[]> {
    return this.http.get<Product[]>(westUrl, {
      params: {
        searchText,
        page: page.toString(),
        size: size.toString(),
      }
    })
  }

  getOperationList(page: number = 0, size: number = 10): Observable<Product[]> {
    return this.http.get<Product[]>(operationUrl, {
      params: {
        page: page.toString(), size: size.toString()
      }
    })
  }

  getProductById(id: string, token: string = ""): Observable<Product> {
    return this.http.get<Product>(`${url}/${id}`, {
      params: {token,}
    });
  }

  postBus(body: object): Observable<object> {
    return this.http.post(busUrl, JSON.stringify(body), {
      headers: new HttpHeaders({
        "Accept": "text/plain",
        "Content-Type": "text/plain"
      }),
      responseType: 'text'
    }).pipe(map(res => JSON.parse(decodeURIComponent(res))))
  }

  getSwiper() {
    return this.http.get<any>(swiperUrl)
  }

  getExamRstList(token: string = "", year: string = ""): Observable<string[]> {
    return this.http.get<any>(rstExamApiUrl, {
      params: {
        token,
        year,
      }
    })
  }

  getSubject() {
    return this.http.get<Object[]>(subjectsUrl)
  }

  validateActivity(path, token): Observable<Status> {
    return this.http.get<Status>(host + `/activity/${path}/status/person?token=${token}`)
  }
}
