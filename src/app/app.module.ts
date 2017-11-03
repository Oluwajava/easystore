import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {CoreModule} from './core-module/core.module';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import {CustomerModule} from './pages/customer/customer.module';
import {EmployeeModule} from './pages/employee/employee.module';
import {ItemModule} from './pages/item/item.module';
import {SaleModule} from './pages/sale/sale.module';
import { ProductListComponent } from './product-list/product-list.component';
import {ChartsModule} from 'ng2-charts';
import {CoreService} from './core-module/service/core.service';
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {httpFactory} from "./core-module/service/http-factory";
import {InterceptedHttp} from "./core-module/service/interceptedhttp.service";
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {Daterangepicker} from "ng2-daterangepicker";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent,
    ProductListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    CustomerModule,
    EmployeeModule,
    ItemModule,
    SaleModule,
    ChartsModule,
    DataTablesModule,
    Daterangepicker
  ],
  providers: [CoreService, InterceptedHttp, {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
