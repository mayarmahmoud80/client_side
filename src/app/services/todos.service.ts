import { Injectable } from '@angular/core';
import { TodoType } from '../types/todos.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { 
    
  }
  private todos:TodoType[]=[{
    'userId':1,
    'id':1,
    "title"  :"title 1",
    "completed":false
  },
  {
    'userId':1,
    'id':2,
    "title" : "title 2",
    "completed":false
  }]
  insertodos(todo:TodoType){
    this.todos.push(todo)

  }
  gettodos(){
    return this.todos.slice();
  }
  deletetodos(id:number){
    const Index=this.todos.findIndex(todo=>todo.id==id)
    if(Index>-1){
      this.todos.splice(Index,1);
    }
  }
}
