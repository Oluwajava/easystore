import {Component, OnInit} from '@angular/core';
import {StoreRepository} from "../../../../core-module/service/repository/store-repository";
import {Constants} from "../../../../utils/constants";

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public _barChartData: any[] = [
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'Card'},
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'Cash'},
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'Gift Card'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(private storeRepository: StoreRepository) {
    this.storeRepository.query({destination: Constants.PAYMENT_METHODS}, (data) => {
      const card = [];
      const cash = [];
      const giftCard = [];


      for (const d of data) {
        card.push(d.card);
        cash.push(d.cash);
        giftCard.push(d.giftCard);
      }

      const barchart = [{data: card}, {data: cash}, {data: giftCard}];

      console.log(barchart);
      this.barChartData = barchart;

    });
  }

  ngOnInit() {
  }

  set barChartData(value: any[]) {
    this._barChartData = value;
  }


}
