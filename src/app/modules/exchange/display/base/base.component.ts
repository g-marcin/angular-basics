import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  baseCurrency = '';
  serviceCurrency = '';
  currencyCodes: any = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencyNames().subscribe((currencies) => {
      this.currencyCodes = Object.entries(currencies);
    });
  }
  setSelectValue(e: any) {
    this.baseCurrency = e.target.value;
    this.currencyService.updateBaseCurrency(this.baseCurrency);
  }
}
