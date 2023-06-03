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
  behaviorSubjectValue: string = '';
  constructor(
    private localStorageService: LocalStorageService,
    private currencyService: CurrencyService
  ) {}
  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((currencies) => {
      this.currencyLatest = currencies.rates;
    });

    this.currencyService.getCurrencyNames().subscribe((currencies) => {
      this.currencyNames = Object.entries(currencies);
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
