import {Component, OnInit} from '@angular/core';
import moment = require('../../../../../assets/bower_components/moment/moment');
import {StoreRepository} from "../../../../core-module/service/repository/store-repository";
import {Constants} from "../../../../utils/constants";
declare var $: any;

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.css']
})
export class SalesSummaryComponent implements OnInit {

  public _lineChartData: Array<any> = [
    {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Sales'}
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { //  grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public paymentMethod: any = {};

  constructor(private storeRepository: StoreRepository) {
    this.storeRepository.query({destination: Constants.SALES_GRAPH}, (response) => {
      let label = [];
      let data = [];

      for (let d of response) {
        label.push(d.label);
        data.push(d.data);
      }

      console.log(label);
      console.log(data);

      this._lineChartData = data;
      this.lineChartLabels = label;

    });

    this.storeRepository.query({destination: Constants.PAYMENT_METHODS_SALES_SUMMARY}, response => {
      this.paymentMethod = response;
    });
  }

  ngOnInit() {
  }

  datePickerInit() {

  }

  set lineChartData(value: Array<any>) {
    this._lineChartData = value;
  }


}
