import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LocalStorageService } from '../LocalStorageService/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseURL = 'https://api.frankfurter.app/';
  presentCurrency = '';
  $sub: Subscription = new Subscription();
  private presentCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      this.localStorageService.get('defaultCurrency') || 'USD'
    );
  presentCurrency$ = this.presentCurrencySubject.asObservable();
  private baseCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('AUD');
  baseCurrency$ = this.baseCurrencySubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  getCurrencyNames() {
    const currencyNames = this.httpClient.get<{ [k: string]: string }>(
      `${this.baseURL}currencies`
    );
    return currencyNames;
  }
  getCurrencyLatest(baseCurrency: string) {
    const currencyLatest = this.httpClient.get<any>(
      `${this.baseURL}latest?from=${baseCurrency}`
    );
    return currencyLatest;
  }
  updatePresentCurrency(currencyCode: string) {
    this.presentCurrencySubject.next(currencyCode);
  }
  updateBaseCurrency(currencyCode: string) {
    this.baseCurrencySubject.next(currencyCode);
  }
}
