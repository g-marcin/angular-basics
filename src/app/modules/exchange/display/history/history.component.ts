import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
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
  $subs: Subscription = new Subscription();
  constructor(
    private historyService: HistoryService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.$subs.add(
      this.currencyService.presentCurrency$.subscribe((value) => {
        this.presentCurrency = value;
        this.fetchHistoryData();
      })
    );
    this.$subs.add(
      this.currencyService.baseCurrency$.subscribe((value) => {
        this.baseCurrency = value;
        this.fetchHistoryData();
      })
    );
  }
  fetchHistoryData() {
    this.historyService
      .getCurrencyHistory(this.baseCurrency)
      .subscribe((currencies) => {
        const result = Object.entries(currencies.rates)
          .map(([date, rates]: [string, { [k: string]: number }]) => {
            let presentCurrencyRate = rates[this.presentCurrency];
            return [date, presentCurrencyRate];
          })
          .reverse();
        this.currencyHistory = result;
      });
  }
  ngOnDestroy() {
    this.$subs.unsubscribe;
  }
}
