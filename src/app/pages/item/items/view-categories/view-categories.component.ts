import { Component, OnInit } from '@angular/core';
import {StoreRepository} from "../../../../core-module/service/repository/store-repository";
import {Constants} from "../../../../utils/constants";
import { Subject } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  dtTrigger = new Subject();
  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      numberOfItems: {
        title: 'Number of Items'
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
    this.storeRepository.query({destination: Constants.CATEGORIES_LIST}, (data) => {
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
