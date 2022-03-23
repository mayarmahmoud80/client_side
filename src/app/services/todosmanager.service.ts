import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'node:process';
import { $ } from 'protractor';
import { TodosManagerType } from '../types/todosmanager.type';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodosmanagerService {

  constructor(private http:HttpClient ,private userservices:UserService,private router:Router) { }
 private _todos : TodosManagerType[] = []

 UrlUrl: string="http://localhost:3000/Todos"
/*
 fetchAllTodos(){
   this.http.get<{todos:TodosManagerType[]}>(this.UrlUrl,{
     headers:{
       authorization:this.userservices.getToken()
     }}).subscribe(
       (data)=> this._todos= data.todos,
       err=>console.log(err)
     )
 }*/


 fetchAllTodos() {
  this.http
    .get<{ todos : TodosManagerType[] }>(`${this.UrlUrl}/all`)
    .subscribe(
      (data) => {this._todos = data.todos,
                   console.log(data)},
      (err) => console.log("fetch error" + err)
    );
}
 fetchTodos() {
  this.http
    .get<{ todos: TodosManagerType[] }>(this.UrlUrl, {
      headers: {
        authorization: this.userservices.getToken(),
      },
    })
    .subscribe(
      (data) => this._todos = data.todos,
    
      (err) => console.log("fetch error" + err)
    );
}
 get todos(){  
  return this._todos.slice();
}

  delete(id: string) {
    this.http
      .delete(`${this.UrlUrl}/${id}`, {
        headers: {
          authorization: this.userservices.getToken(),
        },
      })
      .subscribe(
         (data) => this.LocalTodosDelete(id),
        (err) => console.log(err)
      );
  }
  LocalTodosDelete(id:string){
    const Index =this.todos.findIndex(todo =>todo._id == id);
    if(Index>-1){
      this._todos.splice(Index,1);
    }
  }

  getTodosId(id:string){
   return this._todos.find(todo => todo._id == id)
  }

  updateTodos(todo:TodosManagerType){
    this.http.put(`${this.UrlUrl}/${todo._id}`, {
      title:todo.title,
      content:todo.content
    },{
      headers: {
        authorization: this.userservices.getToken(),}      
    }).subscribe(
      (data)=>{console.log(data),
               alert(" todo title  : " + todo.title  + "      " +" Update Successful" ),
             
               this.router.navigate(['dashboard'])        },
               (err)=>console.log(err)
    );
  }
  creatTodo(todo: TodosManagerType) {
    this.http
      .post<{ todo: TodosManagerType }>(
        this.UrlUrl,
        {
          title: todo.title,
          content: todo.content,
        },
        {
          headers: {
            authorization: this.userservices.getToken(),
          },
        }
      )
      .subscribe(
        (data) => {
          this._todos.push(data.todo),
          this.router.navigate(['dashboard']);
        },
        (err) => console.log(err)
      );
  }
  
}
