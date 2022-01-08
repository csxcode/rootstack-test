import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { AlertMessagesComponent } from './components/alert-messages/alert-messages.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapComponent } from './components/map/map.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { environment } from '@environments/environment';
import { DatetimePipe } from './pipes/datetime.pipe';

@NgModule({
  declarations: [
    NotFoundComponent,
    ControlMessagesComponent,
    AlertMessagesComponent,
    MainLayoutComponent,
    HeaderComponent,
    SiderbarComponent,
    LoadingComponent,
    PaginatorComponent,
    MapComponent,
    DatetimePipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.googleApiKey
    })
  ],
  exports: [
    NgxPaginationModule,
    NotFoundComponent,
    ControlMessagesComponent,
    AlertMessagesComponent,
    MainLayoutComponent,
    HeaderComponent,
    SiderbarComponent,
    LoadingComponent,
    PaginatorComponent,
    MapComponent,
    DatetimePipe
  ]
})
export class SharedComponentsModule { }
