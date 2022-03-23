import { Component, Input, OnInit } from '@angular/core';
import { TodosmanagerService } from 'src/app/services/todosmanager.service';
import { TodosManagerType } from 'src/app/types/todosmanager.type';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
 @Input() showActions: boolean = true ; 
 @Input() todoList: TodosManagerType[] = [];
  constructor(private todosmanagerservices:TodosmanagerService) { }
 

  ngOnInit(): void {
    if (this.todoList.length == 0)
    this.todosmanagerservices.fetchTodos()
  }
  get todos(){
    return this.todosmanagerservices.todos;
  }

}
