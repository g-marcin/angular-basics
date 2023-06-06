import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/services';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseURL = 'https://api.frankfurter.app/';
  presentCurrency = 'USD';

  $sub: Subscription = new Subscription();
  private presentCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      this.localStorageService.get('defaultPresent') || 'USD'
    );
  presentCurrency$ = this.presentCurrencySubject.asObservable();
  private baseCurrencySubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(
      this.localStorageService.get('defaultBase') || 'AUD'
    );
  baseCurrency$ = this.baseCurrencySubject.asObservable();
  currencyLatest$: Observable<any> = new Observable();

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  onInit() {
    this.currencyLatest$ = this.getCurrencyLatest();
  }

  getCurrencyNames() {
    return this.httpClient.get<{ [k: string]: string }>(
      `${this.baseURL}currencies`
    );
  }
  getCurrencyLatest() {
    let baseCurrency;
    this.$sub.add(
      this.baseCurrency$.subscribe((value) => {
        baseCurrency = value;
      })
    );
    return this.httpClient.get<any>(
      `${this.baseURL}latest?from=${baseCurrency}`
    );
  }
  updatePresentCurrency(currencyCode: string) {
    this.presentCurrencySubject.next(currencyCode);
  }
  updateBaseCurrency(currencyCode: string) {
    this.baseCurrencySubject.next(currencyCode);
  }
}
