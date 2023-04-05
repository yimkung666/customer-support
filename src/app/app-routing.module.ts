import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { HomeRoutingModule } from './home/home-routing.module';
import { CustomerSupportModule } from './customer-support/customer-support.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      hideNav: true
    }
  },
  {
    path: 'customer-support',
    loadChildren: () => import('./customer-support/customer-support.module').then(m => m.CustomerSupportModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    CustomerSupportModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
