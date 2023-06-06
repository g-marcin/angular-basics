import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent {
  presentCurrency = '';
  baseCurrency = '';
  displayedRate = 0;
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
    let presentCurrency: string;
    this.$subs.add(
      this.currencyService.presentCurrency$.subscribe((value) => {
        presentCurrency = value;
      })
    );
    this.currencyService.getCurrencyLatest().subscribe((currencyLatest) => {
      this.currencyLatest = currencyLatest;
      this.displayedRate = currencyLatest.rates[presentCurrency || 'USD'];
    });
  }

  ngOnDestroy() {
    this.$subs.unsubscribe();
  }
}
