import { Component, OnInit } from '@angular/core';
import {StoreRepository} from "../../../../core-module/service/repository/store-repository";
import {Constants} from "../../../../utils/constants";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  dtTrigger = new Subject();
  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      category: {
        title: 'Category'
      },
      price: {
        title: 'Price'
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
  public _categories: any;

  constructor(private storeRepository: StoreRepository) {
    this.storeRepository.query({destination: Constants.ITEMS_LIST}, (data) => {
      this.data = data;
      this.dtTrigger.next();
    });

    this.storeRepository.query({destination: Constants.CATEGORIES_LIST}, (data) => {
      this.categories = data;
    })
  }

  ngOnInit() {
  }

  set data(value: any) {
    this._data = value;
  }
  set categories(value: any) {
    this._categories = value;
  }
}
