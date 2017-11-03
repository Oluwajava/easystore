import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SalesComponent} from './sales/sales.component';
import {CoreModule} from '../../core-module/core.module';
import {CategorySalesComponent} from './sales/category-sales/category-sales.component';
import {ItemSalesComponent} from './sales/item-sales/item-sales.component';
import {PaymentMethodsComponent} from "./sales/payment-methods/payment-methods.component";
import {SalesTrendComponent} from "./sales/sales-trend/sales-trend.component";
import {SalesSummaryComponent} from "./sales/sales-summary/sales-summary.component";
import {AppRoutingModule} from "../../app-routing/app-routing.module";
import {EmployeeModule} from "../employee/employee.module";
import {ChartsModule} from "ng2-charts";
import {Daterangepicker} from "ng2-daterangepicker";

const COMPONENTS = [SalesComponent,
  SalesSummaryComponent,
  SalesTrendComponent,
  ItemSalesComponent,
  CategorySalesComponent,
  PaymentMethodsComponent,
  ];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    EmployeeModule,
    ChartsModule,
    Daterangepicker
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class SaleModule { }
