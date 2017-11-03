import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {HomeComponent} from '../pages/home/home.component';
import {CustomersComponent} from '../pages/customer/customers/customers.component';
import {ItemsComponent} from '../pages/item/items/items.component';
import {SalesComponent} from '../pages/sale/sales/sales.component';
import {EmployeeComponent} from '../pages/employee/employees/employee.component';
import {ViewEmployeeComponent} from '../pages/employee/employees/view-employee/view-employee.component';
import {EmployeeTransactionComponent} from '../pages/employee/employees/employee-transaction/employee-transaction.component';
import {ViewCategoriesComponent} from '../pages/item/items/view-categories/view-categories.component';
import {ViewDiscountsComponent} from '../pages/item/items/view-discounts/view-discounts.component';
import {ViewItemsComponent} from '../pages/item/items/view-items/view-items.component';
import {SalesSummaryComponent} from '../pages/sale/sales/sales-summary/sales-summary.component';
import {SalesTrendComponent} from '../pages/sale/sales/sales-trend/sales-trend.component';
import {ItemSalesComponent} from '../pages/sale/sales/item-sales/item-sales.component';
import {CategorySalesComponent} from '../pages/sale/sales/category-sales/category-sales.component';
import {PaymentMethodsComponent} from '../pages/sale/sales/payment-methods/payment-methods.component';
import {CoreModule} from "../core-module/core.module";
import {LoginComponent} from "../login/login.component";
import {AuthGuard} from "../core-module/service/auth.guard";

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
      path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},
      {path: 'customers', component: CustomersComponent},
      {
        path: 'items', component: ItemsComponent, children: [
        {path: 'categories', component: ViewCategoriesComponent},
        {path: 'discounts', component: ViewDiscountsComponent},
        {path: 'items', component: ViewItemsComponent},
        {path: '', redirectTo: 'items', pathMatch: 'full'},
      ]
      },
      {
        path: 'sales', component: SalesComponent, children: [
        {path: 'summary', component: SalesSummaryComponent},
        {path: 'trend', component: SalesTrendComponent},
        {path: 'item/sales', component: ItemSalesComponent},
        {path: 'payment', component: PaymentMethodsComponent},
        {path: 'category/sales', component: CategorySalesComponent},
        {path: 'employee/sales', component: EmployeeTransactionComponent},
        {path: '', redirectTo: 'summary', pathMatch: 'full'},
      ]
      },
      {
        path: 'employees', component: EmployeeComponent, children: [
        {path: 'view', component: ViewEmployeeComponent},
        {path: 'transaction', component: EmployeeTransactionComponent},
        {path: '', redirectTo: 'view', pathMatch: 'full'},
      ]
      },
      {path: '', redirectTo: 'home', pathMatch: 'full'},
    ]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(@Optional() @SkipSelf() appRoutingModule: AppRoutingModule) {
    if (appRoutingModule) {
      throw new Error('AppRoutingModule can only be a singleton imported by the Root AppModule ');
    }
  }
}
