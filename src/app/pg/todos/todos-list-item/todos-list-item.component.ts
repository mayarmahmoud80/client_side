import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { TodosmanagerService } from 'src/app/services/todosmanager.service';
import { defaultTodos, TodosManagerType } from 'src/app/types/todosmanager.type';

@Component({
  selector: 'app-todos-list-item',
  templateUrl: './todos-list-item.component.html',
  styleUrls: ['./todos-list-item.component.css']
})
export class TodosListItemComponent implements OnInit {
  @Input() todo : TodosManagerType  = defaultTodos ;
  @Input() showActions: boolean = true;

  constructor(private todoservices:TodosmanagerService,private router:Router ) { }

  ngOnInit(): void {
  }
  navigateTodos(id:string){
    this.router.navigate(['dashboard','todos',id])
  }

  navigateUpdateTodoForm(id:string){
    this.router.navigate(['dashboard','todo',id])
  }
  /*get todos(){
    return this.todoservices.gettodos();
  }*/
  delete(id:string){
    this.todoservices.delete(id)
   // this.todoservices.delete(this.todo._id)
  }


}
