import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { format, subDays } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  baseURL = 'https://api.frankfurter.app/';

  private currencyHistorySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('USD');
  public currencyHistory$ = this.currencyHistorySubject.asObservable();
  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Key: '',
    }),
  };

  getCurrencyHistory() {
    //TODO:type the history response
    const date = new Date();
    const dateFrom = format(date, 'yyyy-MM-dd');
    const dateTo = format(subDays(date, 12), 'yyyy-MM-dd');
    return this.httpClient.get<any>(
      `${this.baseURL}${dateTo}..${dateFrom}?from=${'PLN'}`,
      {
        headers: this.httpOptions.headers,
      }
    );
  }
}
