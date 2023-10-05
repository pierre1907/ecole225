import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontModule } from './front/front.module';
// import { TemplateFrontComponent } from './shared/templates/template-front/template-front.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '',  
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./front/front.module').then(m => m.FrontModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'authentification',
    loadChildren: () => import('./shared/authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
