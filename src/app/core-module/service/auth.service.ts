/**
 * Created by Mayokun on 9/2/2017.
 */
import {Injectable} from '@angular/core';
import {StoreRepository} from './repository/store-repository';
import {Constants} from '../../utils/constants';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class AuthService {

  currentUser: any;
  returnUrl: string;

  constructor(private storeRepository: StoreRepository, private router: Router, private route: ActivatedRoute) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }

  login() {
    this.storeRepository.query({destination: Constants.LOGIN}, callback => {
      localStorage.setItem(Constants.USER, callback);
      this.currentUser = callback;
      this.router.navigateByUrl(this.returnUrl);
    });
  }

  logout() {
    localStorage.removeItem(Constants.USER);
    this.router.navigateByUrl('/login');
  }

}

