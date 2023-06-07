import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseURL = 'https://api.frankfurter.app/';
  $subs: Subscription = new Subscription();
  private presentCurrencySubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.localStorageService.get('defaultPresent') || 'USD',
  );
  presentCurrency$ = this.presentCurrencySubject.asObservable();
  private baseCurrencySubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.localStorageService.get('defaultBase') || 'AUD',
  );
  baseCurrency$ = this.baseCurrencySubject.asObservable();
  private currencyLatestSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  currencyLatest$ = this.currencyLatestSubject.asObservable();

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    this.baseCurrency$.subscribe((baseCurrency) => {
      this.httpClient.get<any>(`${this.baseURL}latest?from=${baseCurrency}`).subscribe((newCurrencyLatest) => {
        this.currencyLatestSubject.next(newCurrencyLatest);
      });
    });
  }

  onInit() {}

  getCurrencyNames() {
    return this.httpClient.get<{ [k: string]: string }>(`${this.baseURL}currencies`);
  }

  updatePresentCurrency(currencyCode: string) {
    this.presentCurrencySubject.next(currencyCode);
  }

  updateBaseCurrency(currencyCode: string) {
    this.baseCurrencySubject.next(currencyCode);
  }

  ngOnDestroy() {
    this.$subs.unsubscribe();
  }
}
