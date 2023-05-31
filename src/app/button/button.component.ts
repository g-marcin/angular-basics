import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  count = 0;
  constructor() {}
  ngOnInit(): void {
    console.log('button component is initialized');
  }
  onClick() {
    this.count = this.count + 1;
    console.log();
  }
}
