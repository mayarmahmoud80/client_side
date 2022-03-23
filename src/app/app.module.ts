import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './pg/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pg/home/home.component';
import { NotfoundComponent } from './pg/notfound/notfound.component';
import { DefaulComponent } from './pg/default/defaul.component';
import { SignupComponent } from './pg/signup/signup.component';
import { DashboardComponent } from './pg/dashboard/dashboard.component';
import { TodosFormsComponent } from './pg/todos/todos-forms/todos-forms.component';
import { TodosListItemComponent } from './pg/todos/todos-list-item/todos-list-item.component';
import { TodosListComponent } from './pg/todos/todos-list/todos-list.component';
import { TodosDetailsComponent } from './pg/todos/todos-details/todos-details.component';
import { NavbarComponent } from './pg/navbar/navbar.component';
import { TodosPgComponent } from './pg/todos/todos-pg/todos-pg.component';
import { HomeDefultComponent } from './pg/home-defult/home-defult.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotfoundComponent,
    DefaulComponent,
    SignupComponent,
    DashboardComponent,
    TodosFormsComponent,
    TodosListItemComponent,
    TodosListComponent,
    TodosDetailsComponent,
    NavbarComponent,
    TodosPgComponent,
    HomeDefultComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
