import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {
  constructor(private currencyService: CurrencyService) {}
  baseCurrency = '';
  serviceCurrency = '';
  currencyCodes: any = [];

  ngOnInit(): void {
    this.currencyService.getCurrencyNames().subscribe((currencies) => {
      this.currencyCodes = Object.entries(currencies);
    });
  }

  setSelectValue(e: any) {
    this.baseCurrency = e.target.value;
    this.currencyService.updateBaseCurrency(this.baseCurrency);
    console.log(this.currencyService);
    const subscription = this.currencyService.baseCurrency$.subscribe(
      async (value) => {
        this.serviceCurrency = await value;
      }
    );
  }
}
