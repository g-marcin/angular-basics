import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss'],
})
export class CurrencyItemComponent {
  @Input() element: any = [];
  currencyCode: string = this.element[0];

  @Input() rateElement: any = [];
  currencyName: string = this.rateElement[1];
  @Input() currencyRate: any = '';
  @Output() buttonClickEmitter: EventEmitter<any> = new EventEmitter();
  emitValues() {
    this.buttonClickEmitter.emit(this.element);
  }
}
