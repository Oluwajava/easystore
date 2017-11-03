import {Repository} from "./repository.interface";
import {Specification} from "./specification";
import {CoreService} from "../core.service";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {RepositoryData} from "./repository-data";

@Injectable()
export class HttpRepository implements Repository<any> {


  constructor(private coreService: CoreService) {
    console.log("StaffHttpRepository INitialized");
  }

  add(data: RepositoryData): Observable<any> {
    return this.coreService.httpPost(data.destination, data.item);
  }

  addItems(data: RepositoryData): void {
    for (var item of data.items) {
      this.coreService.httpPost(data.destination, item);
    }
  }

  update(data: RepositoryData): Observable<any> {
    return this.coreService.httpPost(data.destination, data.item);
  }

  remove(data: RepositoryData): Observable<any> {
    return this.coreService.httpPost(data.destination, data.item);
  }

  removeItems(data: RepositoryData): void {
    for (var item of data.items) {
      this.coreService.httpPost(data.destination, item);
    }
  }

  query(data: RepositoryData): Observable<any> {
    return this.coreService.httpGet(data.destination);
  }


}
