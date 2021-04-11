import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { from } from 'rxjs';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo:Todo[];


  inputTodo:string = "";

  constructor() {
    this.todo= [];
   }

  ngOnInit(): void {

    Aos.init();

    this.todo = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }
  
  toggleDone (id:number) {
    this.todo.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }
  deleteTodo (id:number) {
    this.todo = this.todo.filter((v, i) => i !== id);
  }

  updateTodo (id:number) {
    // this.todo = this.todo.filter((v, i) => i !== id);
    this.todo.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  addTodo () {
    this.todo.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}
