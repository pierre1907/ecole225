import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferentielRoutingModule } from './referentiel-routing.module';
import { RLayoutComponent } from './r-layout/r-layout.component';
import { RefAddComponent } from './ref-add/ref-add.component';
import { RefEditComponent } from './ref-edit/ref-edit.component';
import { RefDeleteComponent } from './ref-delete/ref-delete.component';
import { RefIndexComponent } from './ref-index/ref-index.component';


@NgModule({
  declarations: [
    RLayoutComponent,
    RefAddComponent,
    RefEditComponent,
    RefDeleteComponent,
    RefIndexComponent
  ],
  imports: [
    CommonModule,
    ReferentielRoutingModule
  ]
})
export class ReferentielModule { }
