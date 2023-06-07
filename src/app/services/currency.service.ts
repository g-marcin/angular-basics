import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  baseURL = 'https://api.frankfurter.app/';
  $subs: Subscription = new Subscription();

  initialPresentCurrency = this.localStorageService.get('defaultPresent') || 'USD';
  private presentCurrencySubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.initialPresentCurrency);
  presentCurrency$ = this.presentCurrencySubject.asObservable();

  initialBaseCurrency = this.localStorageService.get('defaultBase') || 'AUD';
  private baseCurrencySubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.initialBaseCurrency);
  baseCurrency$ = this.baseCurrencySubject.asObservable();

  initialCurrencyLatest = null;
  private currencyLatestSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.initialCurrencyLatest);
  currencyLatest$ = this.currencyLatestSubject.asObservable();

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    this.$subs.add(
      this.baseCurrency$.subscribe((baseCurrency) => {
        this.httpClient.get<any>(`${this.baseURL}latest?from=${baseCurrency}`).subscribe((newCurrencyLatest) => {
          this.currencyLatestSubject.next(newCurrencyLatest);
        });
      }),
    );
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
