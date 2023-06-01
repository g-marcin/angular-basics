import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonTitle: string = '';
  @Input() inputValue: string = '';

  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  htmlButtonHandler() {
    this.buttonClick.emit(this.inputValue);
  }
}
