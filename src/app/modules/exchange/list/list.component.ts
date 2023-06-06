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
  currencyLatest2: any = {};
  currencyNames = [['', '']];
  presentCurrency: string = '';
  baseCurrency: string = '';
  $subs: Subscription = new Subscription();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.$subs.add(
      this.currencyService.getCurrencyNames().subscribe((currencies) => {
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
    this.$subs.add(
      this.currencyService.currencyLatest$.subscribe((value) => {
        this.currencyLatest2 = value;
      })
    );
  }
  async fetchCurrencyLatest() {
    this.currencyService.getCurrencyLatest().subscribe((currencies) => {
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
