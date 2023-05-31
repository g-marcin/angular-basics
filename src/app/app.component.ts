import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-todo';
  items: string[] = ['one', 'two', 'three'];
  ngOnInit() {
    console.log('component initialized');
    return;
  }
  data: any;
  staticFunction() {
    return this.title;
  }
  
}
