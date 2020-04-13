import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ExpencesSummaryComponent } from './home/expences-summary/expences-summary.component';
import { ManageExpencesComponent } from './home/manage-expences/manage-expences.component';
import { ManageCategoryComponent } from './home/manage-category/manage-category.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AllCategoryComponent } from './home/manage-category/all-category/all-category.component';
import { AddCategoryComponent } from './home/manage-category/add-category/add-category.component';

const routes: Routes = [
  {path:"auth",
  component:AuthComponent,
children:[
  {path:"",component:SigninComponent}, 
  {path:"signin",component:SigninComponent},
  {path:"signup",component:SignupComponent},
  {path:"reset",component:ResetComponent}
]
},
  {path:"home",
  component:HomeComponent,
  children:[
    {path:"",component:DashboardComponent},
    {path:"expences-summary",component:ExpencesSummaryComponent},
    {path:"manage-expences",component:ManageExpencesComponent},
    {path:"manage-category",
    component:ManageCategoryComponent,
  children:[
    {path:"",component:AllCategoryComponent},
    {path:"add-category",component:AddCategoryComponent},
  ]
  },
  ]
},
  {path:"**",component:AuthComponent},
]
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
