import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services';
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
        this.currencyNames = Object.entries(currencies);
      }),
    );
    this.$subs.add(
      this.currencyService.baseCurrency$.subscribe((value) => {
        this.baseCurrency = value;
      }),
    );
    this.$subs.add(
      this.currencyService.presentCurrency$.subscribe((value) => {
        this.presentCurrency = value;
      }),
    );
    this.$subs.add(
      this.currencyService.currencyLatest$.subscribe((value) => {
        this.currencyLatest = value;
      }),
    );
  }
  getCurrencyRate(element: any) {
    return this.currencyLatest[element[0]];
  }
  currencyButtonHandler(e: any) {
    this.currencyService.updatePresentCurrency(e[0]);
  }
}
