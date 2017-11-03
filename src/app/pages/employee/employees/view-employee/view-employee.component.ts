import { Component, OnInit } from '@angular/core';
import {StoreRepository} from '../../../../core-module/service/repository/store-repository';
import {Constants} from '../../../../utils/constants';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  public _employees: any;

  constructor(private storeRepository: StoreRepository) {
    this.storeRepository.query({destination: Constants.EMPLOYEE_LIST}, (data) => {
      this.employees = data;
    });
  }

  ngOnInit() {
  }

  set employees(value: any) {
    this._employees = value;
  }

}
