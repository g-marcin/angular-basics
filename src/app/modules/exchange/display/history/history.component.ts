import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';
import { HistoryService } from 'src/app/services/HistoryService/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  currencyHistory = [['', 0]];
  presentCurrency = '';
  baseCurrency = '';
  constructor(
    private historyService: HistoryService,
    private currencyService: CurrencyService
  ) {}

  presentCurrencySubscription = this.currencyService.presentCurrency$.subscribe(
    (value) => {
      this.presentCurrency = value;
      this.fetchHistoryData();
    }
  );
  baseCurrencySubscription = this.currencyService.baseCurrency$.subscribe(
    (value) => {
      this.baseCurrency = value;
      this.fetchHistoryData();
    }
  );

  ngOnInit(): void {
    this.fetchHistoryData();
  }

  fetchHistoryData() {
    this.historyService
      .getCurrencyHistory(this.baseCurrency)
      .subscribe((currencies) => {
        const result = Object.entries(currencies.rates)
          .map(([date, rates]: [any, any]) => {
            let presentCurrencyRate = rates[this.presentCurrency];
            return [date, presentCurrencyRate];
          })
          .reverse();
        this.currencyHistory = result;
      });
  }
}
