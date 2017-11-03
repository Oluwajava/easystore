import {Component, OnInit} from '@angular/core';
import {Card} from '../../core-module/card/card.model';
import {ProductList} from '../../product-list/product-list.model';
import {Repository} from "../../core-module/service/repository/repository.interface";
import {Constants} from "../../utils/constants";
import {Http} from "@angular/http";
import {StoreRepository} from "../../core-module/service/repository/store-repository";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public _itemsSoldSummary: any;
  public _grossSalesSummary: any;
  public _customersSalesSummary: any;
  public _paymentMethodsSummary: any;
  public _topSales: any;
  public cardDetails: Card[];
  public _productList: ProductList[];
  public _lineChartData: Array<any> = [
    {data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Sales'}
  ];
  public _lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public _pieChartLabels: string[] = ['Satisfied', 'Unsatisfied'];
  public _pieChartData: number[] = [70, 30];
  public pieChartType = 'pie';


  constructor(private storeRepository: StoreRepository) {

    this.getHomeSummary();
  }

  ngOnInit() {
  }

  private getHomeSummary() {
    this.storeRepository.query({destination: Constants.ITEM_SALES_SUMMARY}, (data) => {
      this.itemsSoldSummary = data;
    });
    this.storeRepository.query({destination: Constants.GROSS_SALES_SUMMARY}, (data) => {
      this.grossSalesSummary = data;
    });
    this.storeRepository.query({destination: Constants.CUSTOMER_SUMMARY}, (data) => {
      this.customersSalesSummary = data;
    });
    this.storeRepository.query({destination: Constants.PAYMENT_METHODS_SUMMARY}, (data) => {
      this.paymentMethodsSummary = data;
    });
    this.storeRepository.query({destination: Constants.TOP_SALES}, (data) => {
      this.topSales = data;
    });
    this.storeRepository.query({destination: Constants.CUSTOMERS_SATISFACTION}, (response) => {
      let label = [];
      let data = [];

      for (let d of response) {
        label.push(d.label);
        data.push(d.data);
      }
      this.pieChartData = data;
      this.pieChartLabels = label;
    });
    this.storeRepository.query({destination: Constants.SALES_GRAPH}, (response) => {
      let label = [];
      let data = [];

      for (let d of response) {
        label.push(d.label);
        data.push(d.data);
      }

      console.log(label);
      console.log(data);

      this.lineChartData = data;
      this.lineChartLabels = label;

      console.log(this._lineChartData);
      console.log(this._lineChartLabels);
    });

    this.storeRepository.query({destination: Constants.RECENTLY_ADDED}, (response) => {
      this.productList = response;
    });
  }

  set itemsSoldSummary(value: Card) {
    this._itemsSoldSummary = value;
  }

  set grossSalesSummary(value: Card) {
    this._grossSalesSummary = value;
  }

  set customersSalesSummary(value: Card) {
    this._customersSalesSummary = value;
  }

  set paymentMethodsSummary(value: Card) {
    this._paymentMethodsSummary = value;
  }

  set topSales(value: any) {
    this._topSales = value;
  }

  set pieChartLabels(value: string[]) {
    this._pieChartLabels = value;
  }

  set pieChartData(value: number[]) {
    this._pieChartData = value;
  }
  set lineChartData(value: Array<any>) {
    this._lineChartData = value;
  }

  set lineChartLabels(value: Array<any>) {
    this._lineChartLabels = value;
  }

  set productList(value: ProductList[]) {
    this._productList = value;
  }





}
