import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthentificationComponent } from './authentification.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FrontModule } from 'src/app/front/front.module';


@NgModule({
  declarations: [
    AuthentificationComponent,
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,
    FrontModule
  ]
})
export class AuthentificationModule { }
