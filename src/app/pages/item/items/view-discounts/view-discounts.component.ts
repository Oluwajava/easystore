import { Component, OnInit } from '@angular/core';
import {Constants} from "../../../../utils/constants";
import {StoreRepository} from "../../../../core-module/service/repository/store-repository";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-view-discounts',
  templateUrl: './view-discounts.component.html',
  styleUrls: ['./view-discounts.component.css']
})
export class ViewDiscountsComponent implements OnInit {
  dtTrigger = new Subject();
  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      percentage: {
        title: 'Percentage'
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    attr: {
      class: 'table-fire'
    }
  };

  public _data = [];


  constructor(private storeRepository: StoreRepository) {
    this.storeRepository.query({destination: Constants.DISCOUNT_LIST}, (data) => {
      this.data = data;
      this.dtTrigger.next();
    });
  }

  ngOnInit() {
  }

  set data(value: any) {
    this._data = value;
  }
}
