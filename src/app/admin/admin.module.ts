import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ALayoutComponent } from './a-layout/a-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AHeaderComponent } from './a-header/a-header.component';
import { AFooterComponent } from './a-footer/a-footer.component';


@NgModule({
  declarations: [
    ALayoutComponent,
    DashboardComponent,
    AHeaderComponent,
    AFooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
