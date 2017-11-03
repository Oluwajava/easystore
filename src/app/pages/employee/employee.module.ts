import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeComponent} from './employees/employee.component';
import {ViewEmployeeComponent} from './employees/view-employee/view-employee.component';
import {EmployeeTransactionComponent} from './employees/employee-transaction/employee-transaction.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ChartsModule} from 'ng2-charts';
import {Daterangepicker} from "ng2-daterangepicker";

const COMPONENTS = [EmployeeComponent, ViewEmployeeComponent, EmployeeTransactionComponent]
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ChartsModule,
    Daterangepicker
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class EmployeeModule { }
