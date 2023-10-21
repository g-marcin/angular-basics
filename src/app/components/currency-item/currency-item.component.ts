import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss'],
})
export class CurrencyItemComponent {
  presentCurrencyLocal = '';
  flagSrc = '';
  @Input() presentCurrency: string = '';
  @Input() element: any = [];
  currencyCode: string = this.element[0];
  @Input() rateElement: any = [];
  currencyName: string = this.rateElement[1];
  @Input() currencyRate: number = 0;
  @Output() buttonClickEmitter: EventEmitter<any> = new EventEmitter();
  emitValues() {
    this.buttonClickEmitter.emit(this.element);
  }
  ngOnInit() {
    this.presentCurrencyLocal = this.element[0];
    this.flagSrc = `https://flagsapi.com/${this.presentCurrencyLocal.slice(0, 2)}/flat/64.png`;
  }
}
