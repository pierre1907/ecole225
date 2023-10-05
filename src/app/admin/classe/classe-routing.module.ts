import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseIndexComponent } from './classe-index/classe-index.component';
import { ClasseEditComponent } from './classe-edit/classe-edit.component';
import { ClasseAddComponent } from './classe-add/classe-add.component';
import { ClasseDeleteComponent } from './classe-delete/classe-delete.component';

const routes: Routes = [
  { path: '', component: ClasseIndexComponent},
  { path: 'edit/:id', component: ClasseEditComponent},
  { path: 'add', component: ClasseAddComponent},
  { path: 'delete/:id', component: ClasseDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasseRoutingModule { }
