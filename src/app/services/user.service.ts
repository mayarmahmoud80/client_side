import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginType } from '../types/login.type';
import { UserType } from '../types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private Router:Router) { }
  SetUs(data:LoginType):void{  
    console.log(data)
    window.localStorage.setItem('token',  `Bearer ${data.token}`)
    window.localStorage.setItem('user', JSON.stringify(data.user));
   
    /* window.localStorage.setItem('user',JSON.stringify(data.user))
    window.localStorage.setItem('token',data.token)*/
  }
  GetUs():UserType | null{
    const Data= window.localStorage.getItem('user')
    if(!Data){
      return null
    }
    return JSON.parse(Data)
  }
  UserExist():boolean
  {return this.GetUs() !== null}

  delete(){
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token')
    this.Router.navigate(['login'])
  }

  getToken():string{
    return window.localStorage.getItem('token') || ''
  }


}
