import { Component, OnInit } from '@angular/core';
import { TodosmanagerService } from 'src/app/services/todosmanager.service';
import { TodosManagerType } from 'src/app/types/todosmanager.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private todosmanagerservices:TodosmanagerService) { }

  ngOnInit(): void {
    this.todosmanagerservices.fetchAllTodos()
  }

  get todos() {
    return this.todosmanagerservices.todos;
  }
}
