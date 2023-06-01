import { Component, Input } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(): void {
    // this.list = this.localStorageService.get('list');
  }
  list: string[] = [];

  addTodo(e: any) {
    if (!e) {
      return;
    }
    this.list.push(e);
    console.log(this.list);
  }
  popTodo() {
    this.list.pop();
    console.log(this.list);
  }
  removeTodo(e: string) {
    const todoCopy = [...this.list];
    this.list = todoCopy.filter((todo) => todo != e);
    console.log(this.list);
  }

  save() {
    this.localStorageService.save('list', this.list);
  }
}
