import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseURL = 'https://api.frankfurter.app/';

  private presentCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('AUD');
  public presentCurrency$ = this.presentCurrencySubject.asObservable();

  private baseCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('USD');
  public baseCurrency$ = this.baseCurrencySubject.asObservable();

  private presentToBaseSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public presentToBase$ = this.presentToBaseSubject.asObservable();

  constructor(private httpClient: HttpClient) {}

  //names and latest fetchers
  getCurrencyNames() {
    return this.httpClient.get<{ [k: string]: string }>(
      `${this.baseURL}currencies`
    );
  }
  getCurrencies(baseCurrency: string) {
    return this.httpClient.get<any>(
      `${this.baseURL}latest?from=${baseCurrency}`
    );
  }

  //buttons and select handlers
  updatePresentCurrency(currencyCode: string) {
    this.presentCurrencySubject.next(currencyCode);
  }
  updateBaseCurrency(currencyCode: string) {
    this.baseCurrencySubject.next(currencyCode);
  }
}
