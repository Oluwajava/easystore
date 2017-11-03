import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemsComponent} from './items/items.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ViewItemsComponent} from './items/view-items/view-items.component';
import {ViewCategoriesComponent} from './items/view-categories/view-categories.component';
import {ViewDiscountsComponent} from './items/view-discounts/view-discounts.component';
import {CoreModule} from '../../core-module/core.module';

const COMPONENTS = [ItemsComponent, ViewItemsComponent, ViewCategoriesComponent,
  ViewDiscountsComponent]

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class ItemModule { }
