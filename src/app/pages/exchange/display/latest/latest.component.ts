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
        this.displayedRate = this.currencyLatest[value];
      }),
    );
    this.$subs.add(
      this.currencyService.baseCurrency$.subscribe((value) => {
        this.baseCurrency = value;
      }),
    );
    this.$subs.add(
      this.currencyService.currencyLatest$.subscribe((currencyLatest) => {
        this.currencyLatest = currencyLatest;
      }),
    );
  }

  ngOnDestroy() {
    this.$subs.unsubscribe();
  }
}
