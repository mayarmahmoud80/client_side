import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosmanagerService } from 'src/app/services/todosmanager.service';
import { defaultTodos, TodosManagerType } from 'src/app/types/todosmanager.type';

@Component({
  selector: 'app-todos-forms',
  templateUrl: './todos-forms.component.html',
  styleUrls: ['./todos-forms.component.css']
})
export class TodosFormsComponent implements OnInit {
   Model:Boolean = true;
  todo : TodosManagerType = defaultTodos;
 
  constructor(private route:ActivatedRoute,private todosmanagerservices:TodosmanagerService) { }
  
  ngOnInit(): void {  
    const id : string = this.route.snapshot.paramMap.get('id')!;
    if(id === 'new') {
      this.Model = false; 
      return;
    };
    this.todo=this.todosmanagerservices.getTodosId(id)!;
  }
  update(){
    this.todosmanagerservices.updateTodos(this.todo)
  }
  create(){
    this.todosmanagerservices.creatTodo(this.todo)
  }
}
