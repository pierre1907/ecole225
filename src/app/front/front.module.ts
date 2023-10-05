import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FLayoutComponent } from './f-layout/f-layout.component';
import { FHeaderComponent } from './f-header/f-header.component';
import { FFooterComponent } from './f-footer/f-footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    FLayoutComponent,
    FHeaderComponent,
    FFooterComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule
  ]
})
export class FrontModule { }
