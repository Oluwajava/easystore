import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../../utils/constants";
import {StoreRepository} from "../../../../core-module/service/repository/store-repository";

@Component({
  selector: 'app-employee-transaction',
  templateUrl: './employee-transaction.component.html',
  styleUrls: ['./employee-transaction.component.css']
})
export class EmployeeTransactionComponent implements OnInit {


  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
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
