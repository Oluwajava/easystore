import {Injectable} from '@angular/core';
import {CacheRepository} from './cache-repository';
import {HttpRepository} from './http-repository';
import {RepositoryData} from './repository-data';
import {CoreService} from '../core.service';
import {Repository} from './repository.interface';
/**
 * Created by Mayokun on 7/28/2017.
 */

@Injectable()
export class StoreRepository {
  constructor(private cacheRepository: CacheRepository, private httpRepository: HttpRepository) {
  }

  create(data: RepositoryData, complete?: () => void): any {
    this.httpRepository.add(data).subscribe(response => {
      console.log(response)
      return response;
    }, error => console.log(error));
  }

  query(data: RepositoryData, callback?: (callback: any) => void) {
    this.httpRepository.query(data).subscribe(response => {
        callback(response)
        return response;
      }, error => {
        console.log(error);
      }
    );
  }

  update(data: RepositoryData, complete?: () => void) {
    this.httpRepository.update(data).subscribe(response => {
      return response;
    }, error => console.log(error));
  }

  delete(data: RepositoryData, complete?: () => void) {
    this.httpRepository.remove(data).subscribe(response => {
      return response;
    }, error => console.log(error));
  }
}


