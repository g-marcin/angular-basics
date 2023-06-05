import { Component } from '@angular/core';
import { LocalStorageService } from '../../../services/LocalStorageService/local-storage.service';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  currencyLatest: any = {};
  currencyNames = [['', '']];
  presentCurrency: string = '';
  baseCurrency = '';
  constructor(
    private localStorageService: LocalStorageService,
    private currencyService: CurrencyService
  ) {}
  ngOnInit(): void {
    this.fetchCurrencyLatest();
    const currencyNamesSubscription = this.currencyService
      .getCurrencyNames()
      .subscribe((currencies) => {
        this.currencyNames = Object.entries(currencies);
      });
  }
  baseCurrencySubscription = this.currencyService.baseCurrency$.subscribe(
    (value) => {
      this.baseCurrency = value;
      this.fetchCurrencyLatest();
    }
  );
  presentCurrencySubscription = this.currencyService.presentCurrency$.subscribe(
    (value) => {
      this.presentCurrency = value;
    }
  );
  fetchCurrencyLatest() {
    this.currencyService
      .getCurrencies(this.baseCurrency)
      .subscribe((currencies) => {
        this.currencyLatest = currencies.rates;
      });
  }

  getCurrencyRate(element: any) {
    return this.currencyLatest[element[0]];
  }
  currencyButtonHandler(e: any) {
    this.presentCurrency = e[0];
    this.currencyService.updatePresentCurrency(e[0]);
    console.log(e, this.presentCurrency);
  }
}
