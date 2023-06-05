import { Component } from '@angular/core';
import { LocalStorageService } from '../../../services/LocalStorageService/local-storage.service';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';
import { HtmlParser } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  currencyLatest: any = {};
  currencyNames = [['', '']];
  presentCurrency: string = '';
  baseCurrency: string = '';

  // clickCounter$: Subject<number> = new Subject();
  clickCounter$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private localStorageService: LocalStorageService,
    private currencyService: CurrencyService,
    private httpClient: HttpClient
  ) {}
  ngOnInit(): void {
    this.fetchCurrencyLatest();
    const currencyNamesSubscription = this.currencyService
      .getCurrencyNames()
      .subscribe((currencies) => {
        this.currencyNames = Object.entries(currencies);
      });

    this.httpClient
      .get('https://gutendex.com/books')
      .subscribe((response: any) => {
        // console.log(response?['results'][1]);
      });

    this.clickCounter$;
  }
  baseCurrencySubscription = this.currencyService.baseCurrency$.subscribe(
    (value) => {
      this.baseCurrency = value;
      this.fetchCurrencyLatest();
    }
  );
  presentCurrencySubscription = this.currencyService.presentCurrency$.subscribe(
    (value) => {
      this.presentCurrency = value;
    }
  );
  fetchCurrencyLatest() {
    this.currencyService
      .getCurrencies(this.baseCurrency)
      .subscribe((currencies) => {
        this.currencyLatest = currencies.rates;
      });
  }

  getCurrencyRate(element: any) {
    return this.currencyLatest[element[0]];
  }
  currencyButtonHandler(e: any) {
    this.presentCurrency = e[0];
    this.currencyService.updatePresentCurrency(e[0]);
    console.log(e, this.presentCurrency);
  }

  save() {
    this.clickCounter$.next(0);
  }
}
