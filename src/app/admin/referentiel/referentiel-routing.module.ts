import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RefIndexComponent } from './ref-index/ref-index.component';
import { RefEditComponent } from './ref-edit/ref-edit.component';
import { RefAddComponent } from './ref-add/ref-add.component';
import { RefDeleteComponent } from './ref-delete/ref-delete.component';

const routes: Routes = [
  { path: '', component: RefIndexComponent},
  { path: 'edit/:id', component: RefEditComponent},
  { path: 'add', component: RefAddComponent},
  { path: 'delete/:id', component: RefDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferentielRoutingModule { }
