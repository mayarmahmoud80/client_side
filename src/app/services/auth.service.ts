import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginType } from '../types/login.type';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private userservice:UserService ,private router:Router) { } 
  
  baseUrl: string = 'http://localhost:3000/auth'

  Signup(data:{
    name: string;
    phone:string;
    password:string;
    email:string;
    address:string;
  //  Isadmin:Boolean;
  }){ 
    this.http.post(`${this.baseUrl}/signup`,data).subscribe(
      (data)=>{this.router.navigate(['login']);},
      (err)=>console.log(err)
    );
  }

  Login(data: { email: string, password: string }) {
    this.http.post<LoginType>(`${this.baseUrl}/login`, data).subscribe(
      (data) => {
        this.userservice.SetUs(data);
        this.router.navigate(['dashboard'])
      },
      (err) => console.log(err)
    );
  }
}