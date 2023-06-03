import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { format, subDays } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseURL = 'https://api.frankfurter.app/';
  presentCurrency = 'USD';

  private presentCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('AUD');
  public presentCurrency$ = this.presentCurrencySubject.asObservable();

  private baseCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('USD');
  public baseCurrency$ = this.baseCurrencySubject.asObservable();

  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      Key: '',
    }),
  };

  getCurrencyNames() {
    //TODO:type the currencies response
    return this.httpClient.get<{ [k: string]: string }>(
      `${this.baseURL}currencies`,
      {
        headers: this.httpOptions.headers,
      }
    );
  }
  getCurrencies() {
    //TODO:type the latest response
    return this.httpClient.get<any>(`${this.baseURL}latest`, {
      headers: this.httpOptions.headers,
    });
  }
  updatePresentCurrency(currencyCode: string) {
    this.presentCurrencySubject.next(currencyCode);
  }
  updateBaseCurrency(currencyCode: string) {
    this.baseCurrencySubject.next(currencyCode);
  }
}
