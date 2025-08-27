import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ConsigneeComponent } from './pages/consignee/consignee.component';
import { EmptyComponent } from './pages/empty/empty.component';
import { BillingPartyComponent } from './pages/billing-party/billing-party.component';

const routes: Routes = [

  {
    path: 'login',
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
   
  },
  {
    path:'',
    component:LayoutComponent,
  /*   canActivate: [AuthGuard], // Assuming you have an AuthGuard to protect routes */
  children:[
 
     {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

    {path:'dashboard',loadChildren:()=>import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule)},
    {
      path:'consignee',
      component:ConsigneeComponent
    },{
      path:'emptypage',
      component:EmptyComponent
    },
    {
      path:'billingparty',
      component:BillingPartyComponent
    }
  ]
  },
  {
    path: '**', redirectTo: 'login' // Redirect to dashboard for any unknown routes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
