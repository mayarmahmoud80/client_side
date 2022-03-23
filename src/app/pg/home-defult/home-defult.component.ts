import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodosmanagerService } from 'src/app/services/todosmanager.service';
import { defaultTodos, TodosManagerType } from 'src/app/types/todosmanager.type';

@Component({
  selector: 'app-home-defult',
  templateUrl: './home-defult.component.html',
  styleUrls: ['./home-defult.component.css']
})
export class HomeDefultComponent implements OnInit {
  @Input() todoList: TodosManagerType[] = [];
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
