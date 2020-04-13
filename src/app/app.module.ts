import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetComponent } from './auth/reset/reset.component';
import { HomeComponent } from './home/home.component';
import { ExpencesSummaryComponent } from './home/expences-summary/expences-summary.component';
import { ManageExpencesComponent } from './home/manage-expences/manage-expences.component';
import { ManageCategoryComponent } from './home/manage-category/manage-category.component';
import { AddCategoryComponent } from './home/manage-category/add-category/add-category.component';
import { AllCategoryComponent } from './home/manage-category/all-category/all-category.component';
import { AddExpencesComponent } from './home/manage-expences/add-expences/add-expences.component';
import { AllExpencesComponent } from './home/manage-expences/all-expences/all-expences.component';
import { EditExpencesComponent } from './home/manage-expences/edit-expences/edit-expences.component';
import { ShareComponent } from './share/share.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignupComponent,
    ResetComponent,
    HomeComponent,
    ExpencesSummaryComponent,
    ManageExpencesComponent,
    ManageCategoryComponent,
    AddCategoryComponent,
    AllCategoryComponent,
    AddExpencesComponent,
    AllExpencesComponent,
    EditExpencesComponent,
    ShareComponent,
    FooterComponent,
    NavbarComponent,
    SigninComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
