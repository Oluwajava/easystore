import {Repository} from "./repository.interface";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {RepositoryData} from "./repository-data";

@Injectable()
export class CacheRepository implements Repository<any> {

  add(data: RepositoryData): Observable<any> {
    throw new Error('Method not implemented.');
  }

  addItems(data: RepositoryData): void {
    throw new Error('Method not implemented.');
  }

  update(data: RepositoryData): Observable<any> {
    throw new Error('Method not implemented.');
  }

  remove(data: RepositoryData): Observable<any> {
    throw new Error('Method not implemented.');
  }

  removeItems(data: RepositoryData): void {
    throw new Error('Method not implemented.');
  }

  query(data: RepositoryData): Observable<any> {
    throw new Error('Method not implemented.');
  }


}
