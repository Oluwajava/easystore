import {SideMenuComponent} from './side-menu/side-menu.component';
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {Http, RequestOptions, XHRBackend} from '@angular/http';
import {httpFactory} from './service/http-factory';
import {InterceptedHttp} from './service/interceptedhttp.service';
import {CardComponent} from './card/card.component';
import {CoreService} from './service/core.service';
import {StoreRepository} from './service/repository/store-repository';
import {CacheRepository} from './service/repository/cache-repository';
import {HttpRepository} from './service/repository/http-repository';
import {Ng2SmartTableComponent} from "ng2-smart-table/ng2-smart-table.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {AuthGuard} from "./service/auth.guard";
import {AuthService} from "./service/auth.service";
import {DataTablesModule} from "angular-datatables";


const COMPONENTS: any[] = [
  CardComponent, HeaderComponent, SideMenuComponent];

const MODULES: any[] = [
  Ng2SmartTableModule, DataTablesModule
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...MODULES

  ],
  exports: [...COMPONENTS, ...MODULES],
  declarations: [...COMPONENTS],
  providers: [CoreService, AuthGuard, AuthService, StoreRepository, CacheRepository, HttpRepository, InterceptedHttp, {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new Error('CoreModule is a singleton that should only be imported by the AppModule');
    }
  }

}
