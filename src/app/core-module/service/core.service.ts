import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Observable} from "rxjs/Observable";


@Injectable()
export class CoreService {

  constructor(private _http: Http) {
  }

  httpPost(endpointUrl: string, payload): Observable<any> {
    return this._http.post(endpointUrl, JSON.stringify(payload))
      .map((res: Response) => res.json());
  }

  httpGet(endpointUrl: string): Observable<any> {
    return this._http.get(endpointUrl)
      .map((res: Response) => res.json());
  }


}
