import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../LocalStorageService/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseURL = 'https://api.frankfurter.app/';

  private presentCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      this.localStorageService.get('defaultCurrency') || 'AUD'
    );
  public presentCurrency$ = this.presentCurrencySubject.asObservable();

  private baseCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('USD');
  public baseCurrency$ = this.baseCurrencySubject.asObservable();

  private presentToBaseSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public presentToBase$ = this.presentToBaseSubject.asObservable();
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}
  presentCurrency = '';

  getCurrencyNames() {
    const currencyNames = this.httpClient.get<{ [k: string]: string }>(
      `${this.baseURL}currencies`
    );
    return currencyNames;
  }
  getCurrencies(baseCurrency: string) {
    const currencyLatest = this.httpClient.get<any>(
      `${this.baseURL}latest?from=${baseCurrency}`
    );

    this.presentToBaseSubject.next(this.presentCurrency);
    return currencyLatest;
  }
  async updatePresentCurrency(currencyCode: string) {
    this.presentCurrencySubject.next(currencyCode);
    const presentCurrencySub = this.presentCurrency$.subscribe(
      (currency) => (this.presentCurrency = currency)
    );
  }
  updateBaseCurrency(currencyCode: string) {
    this.baseCurrencySubject.next(currencyCode);
    const presentCurrencySub = this.presentCurrency$.subscribe(
      (currency) => (this.presentCurrency = currency)
    );
  }
}
