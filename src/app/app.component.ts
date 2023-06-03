import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todo';
  inputValue: string = '';
  todos: string[] = [];
  addTodo(e: any) {
    if (!e) {
      return;
    }
    this.todos.push(e);
    console.log(this.todos);
  }
  popTodo() {
    this.todos.pop();
    console.log(this.todos);
  }
  removeTodo(e: string) {
    const todoCopy = [...this.todos];
    this.todos = todoCopy.filter((todo) => todo != e);
    console.log(this.todos);
  }
}
