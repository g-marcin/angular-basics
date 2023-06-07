import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format, subDays } from 'date-fns';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services';

type CurrencyHistoryType = {
  rates: { date: { '': 0 } };
};

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  baseURL = 'https://api.frankfurter.app/';
  $subs: Subscription = new Subscription();

  private currencyHistorySubject: BehaviorSubject<CurrencyHistoryType> = new BehaviorSubject({
    rates: { date: { '': 0 } },
  });
  currencyHistory$ = this.currencyHistorySubject.asObservable();

  constructor(private httpClient: HttpClient, private currencyService: CurrencyService) {
    this.$subs.add(
      this.currencyService.baseCurrency$.subscribe((baseCurrency) => {
        const date = new Date();
        const dateFrom = format(date, 'yyyy-MM-dd');
        const dateTo = format(subDays(date, 12), 'yyyy-MM-dd');
        this.httpClient
          .get<CurrencyHistoryType>(`${this.baseURL}${dateTo}..${dateFrom}?from=${baseCurrency}`)
          .subscribe((newCurrencyHistory) => {
            this.currencyHistorySubject.next(newCurrencyHistory);
          });
      }),
    );
  }
}
