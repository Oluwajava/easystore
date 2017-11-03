import {Specification} from "./specification";
import {Observable} from "rxjs/Observable";
import {RepositoryData} from "./repository-data";
export interface  Repository<T> {

  add(data: RepositoryData): Observable<any>;

  addItems(data: RepositoryData): void;

  update(data: RepositoryData): Observable<any>;

  remove(data: RepositoryData): Observable<any>;

  removeItems(data: RepositoryData): void;

  query(data: RepositoryData): Observable<any>;
}
