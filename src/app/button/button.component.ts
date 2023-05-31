import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  handleButton() {
    const input = document.getElementById('input') as HTMLInputElement;
    if (input === null) {
      return;
    }
    input.value = 'hello';
  }
}
