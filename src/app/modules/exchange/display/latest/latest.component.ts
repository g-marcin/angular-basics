import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent {
  presentCurrency = '';
  baseCurrency = '';
  currencyLatest: any = {};
  $subs = new Subscription();

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.$subs.add(
      this.currencyService.presentCurrency$.subscribe((value) => {
        this.presentCurrency = value;
        this.fetchCurrencyLatest();
      })
    );
    this.$subs.add(
      this.currencyService.baseCurrency$.subscribe((value) => {
        this.baseCurrency = value;
        this.fetchCurrencyLatest();
      })
    );
  }

  fetchCurrencyLatest() {
    this.currencyService
      .getCurrencyLatest(this.baseCurrency)
      .subscribe((currencyLatest) => {
        this.currencyLatest = currencyLatest;
      });
  }

  ngOnDestroy() {
    this.$subs.unsubscribe();
  }
}
