import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { TodosmanagerService } from 'src/app/services/todosmanager.service';

@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.css']
})
export class TodosDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute , private todosmanagerservices:TodosmanagerService) { }
  id:string =''
  ngOnInit(): void {
//    this.id=this.route.snapshot.paramMap.get('id')//!
  }
  get todo(){
    return this.todosmanagerservices.getTodosId(
      this.route.snapshot.paramMap.get('id')!
    );
  }

}
