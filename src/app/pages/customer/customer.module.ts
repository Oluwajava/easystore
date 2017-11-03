import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomersComponent} from "./customers/customers.component";

const COMPONENTS = [CustomersComponent]
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class CustomerModule { }
