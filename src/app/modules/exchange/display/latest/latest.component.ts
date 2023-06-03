import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent {
  presentCurrency = '';
  constructor(private currencyService: CurrencyService) {}

  presentCurrencySubscription = this.currencyService.presentCurrency$.subscribe(
    (value) => {
      this.presentCurrency = value;
    }
  );
}
