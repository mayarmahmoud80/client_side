import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pg/dashboard/dashboard.component';
import { HomeComponent } from './pg/home/home.component';
import { LoginComponent } from './pg/login/login.component';
import { NotfoundComponent } from './pg/notfound/notfound.component';
import { SignupComponent } from './pg/signup/signup.component';
import { TodosDetailsComponent } from './pg/todos/todos-details/todos-details.component';
import { TodosFormsComponent } from './pg/todos/todos-forms/todos-forms.component';
//import { HomeComponent } from './pages/home/home.component';
//import { NotFoundComponent } from './pages/not-found/not-found.component';
import {IsAuthGuard} from './guard/is-auth.guard';
import {IsNotAuthGuard} from './guard/is-not-auth.guard';



const routes: Routes = [
   {
        path: '',
    // component: HomeComponent,
    component: LoginComponent,
    canActivate: [IsAuthGuard]

      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [IsNotAuthGuard]
      },

      {
        path: 'signup',
        component: SignupComponent,
        canActivate: [IsNotAuthGuard]

      },

     { path: 'dashboard',
      component: DashboardComponent,
      canActivate: [IsAuthGuard]
    },

    { path: 'dashboard/todos/:id',
    component: TodosDetailsComponent
  },


  { path: 'dashboard/todo/:id',
    component: TodosFormsComponent
  },


     {
        path: '**',
        component: NotfoundComponent
      }
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
