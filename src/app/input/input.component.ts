import { Component, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  inputValue = '';
  @Output() todoEmitter: EventEmitter<string> = new EventEmitter();
  @Output() removeTodoEmitter: EventEmitter<string> = new EventEmitter();
  @Output() popTodoEmitter: EventEmitter<string> = new EventEmitter();

  emitTodo(e: any) {
    this.todoEmitter.emit(e);
    this.inputValue = '';
  }
  removeTodo(e: any) {
    this.removeTodoEmitter.emit(e);
    this.inputValue = '';
  }
  popTodo() {
    this.popTodoEmitter.emit();
  }
}
