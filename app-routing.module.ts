import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from '@iam/views/auth/auth.component';
import { GAuth } from './shared/guards/gauth.guard';

const routes: Routes = [

  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: '',
    canActivate:[GAuth],
    loadChildren: () =>
      import('@main/main.module').then((m) => m.MainModule),
  },
  {
    path : '**',
    redirectTo : 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[GAuth]
})
export class AppRoutingModule { }
