import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
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
  test() {
    const observable = new Observable((subscriber) => {
      subscriber.next('Hello');
      subscriber.next('World');
      subscriber.complete();
    });
    const subscription = observable.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Observable completed'),
    });

    // Unsubscribe from the Observable
    subscription.unsubscribe();
  }
}
