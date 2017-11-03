import { Component, OnInit } from '@angular/core';
import {StoreRepository} from "../../../../core-module/service/repository/store-repository";
import {Constants} from "../../../../utils/constants";

@Component({
  selector: 'app-item-sales',
  templateUrl: './item-sales.component.html',
  styleUrls: ['./item-sales.component.css']
})
export class ItemSalesComponent implements OnInit {

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
  public _items: any;

  constructor(private storeRepository: StoreRepository) {
    this.storeRepository.query({destination: Constants.ITEMS_LIST}, (data) => {
      this.items = data;
    });
  }

  ngOnInit() {
  }

  set items(value: any) {
    this._items = value;
  }
}
