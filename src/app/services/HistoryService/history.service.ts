import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format, subDays } from 'date-fns';
import { Subscription, BehaviorSubject } from 'rxjs';
import { CurrencyService } from '../CurrencyService';

interface currencyHistoryResponse extends Response {
  rates: { [date: string]: { [code: string]: number } };
}
@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  baseURL = 'https://api.frankfurter.app/';
  $sub: Subscription = new Subscription();
  private currencyHistorySubject: BehaviorSubject<any> = new BehaviorSubject({
    rates: { date: { '': 0 } },
  });
  currencyHistory$ = this.currencyHistorySubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    const date = new Date();
    const dateFrom = format(date, 'yyyy-MM-dd');
    const dateTo = format(subDays(date, 12), 'yyyy-MM-dd');
    this.currencyHistorySubject.next(
      this.httpClient.get<currencyHistoryResponse>(
        `${
          this.baseURL
        }${dateTo}..${dateFrom}?from=${this.currencyService.baseCurrency$.subscribe(
          (baseCurrency) => baseCurrency
        )}`
      )
    );
  }

  getCurrencyHistory(baseCurrency: string) {
    if (!baseCurrency) {
      baseCurrency = 'AUD';
    }
    const date = new Date();
    const dateFrom = format(date, 'yyyy-MM-dd');
    const dateTo = format(subDays(date, 12), 'yyyy-MM-dd');
    return this.httpClient.get<currencyHistoryResponse>(
      `${this.baseURL}${dateTo}..${dateFrom}?from=${baseCurrency}`
    );
  }
}
