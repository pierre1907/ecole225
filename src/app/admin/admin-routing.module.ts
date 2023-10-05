import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ALayoutComponent } from './a-layout/a-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: ALayoutComponent, children: [
    
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'user', loadChildren:()=> import ('./user/user.module').then( m=> m.UserModule)},
    { path: 'classe', loadChildren:()=> import ('./classe/classe.module').then( m=> m.ClasseModule)},
    { path: 'referentiel', loadChildren:()=> import ('./referentiel/referentiel.module').then( m=> m.ReferentielModule)}


  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
