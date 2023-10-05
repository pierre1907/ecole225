import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasseRoutingModule } from './classe-routing.module';
import { ClasseAddComponent } from './classe-add/classe-add.component';
import { ClasseEditComponent } from './classe-edit/classe-edit.component';
import { ClasseDeleteComponent } from './classe-delete/classe-delete.component';
import { ClasseIndexComponent } from './classe-index/classe-index.component';


@NgModule({
  declarations: [
    ClasseAddComponent,
    ClasseEditComponent,
    ClasseDeleteComponent,
    ClasseIndexComponent
  ],
  imports: [
    CommonModule,
    ClasseRoutingModule
  ]
})
export class ClasseModule { }
