import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptedHttp} from "./interceptedhttp.service";

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
  return new InterceptedHttp(xhrBackend, requestOptions);
}
