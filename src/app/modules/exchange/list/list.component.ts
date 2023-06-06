import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';
import { Subscription } from 'rxjs';
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
  $subs: Subscription = new Subscription();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.$subs.add(
      this.currencyService.getCurrencyNames().subscribe((currencies) => {
        if (!currencies) {
          return;
        }
        this.currencyNames = Object.entries(currencies);
      })
    );
    this.$subs.add(
      this.currencyService.baseCurrency$.subscribe((value) => {
        this.baseCurrency = value;
        this.fetchCurrencyLatest();
      })
    );
    this.$subs.add(
      this.currencyService.presentCurrency$.subscribe((value) => {
        this.presentCurrency = value;
      })
    );
  }
  fetchCurrencyLatest() {
    this.currencyService.getCurrencyLatest().subscribe((currencies) => {
      if (!currencies) {
        return;
      }
      this.currencyLatest = currencies.rates;
    });
  }
  getCurrencyRate(element: any) {
    return this.currencyLatest[element[0]];
  }
  currencyButtonHandler(e: any) {
    this.currencyService.updatePresentCurrency(e[0]);
  }
}
