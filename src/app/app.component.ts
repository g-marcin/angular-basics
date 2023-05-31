import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('component initialized');
    return;
  }
  title = 'angular-todo';
  items: string[] = ['one', 'two', 'three'];
  data: any;
  staticFunction() {
    return this.title;
  }

  ngOnDestroy(): void {}
}
