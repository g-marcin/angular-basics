import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent {
  presentCurrency = '';
  baseCurrency = '';
  presentToBase = '';
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  presentCurrencySubscription = this.currencyService.presentCurrency$.subscribe(
    (value) => {
      this.presentCurrency = value;
    }
  );
  baseCurrencySubscription = this.currencyService.baseCurrency$.subscribe(
    (value) => {
      this.baseCurrency = value;
    }
  );
  presentToBaseSubscription = this.currencyService.presentToBase$.subscribe(
    (value) => {
      this.presentToBase = value;
    }
  );
}
