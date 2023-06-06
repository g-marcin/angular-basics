import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services';
import { LocalStorageService } from 'src/app/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  defaultCurrency = 'AUD';
  currencyCodes = [['', '']];
  $subs: Subscription = new Subscription();

  constructor(
    private currencyService: CurrencyService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.$subs.add(
      this.currencyService.getCurrencyNames().subscribe((currencies) => {
        this.currencyCodes = Object.entries(currencies);
      })
    );
  }

  setSelectValue(e: any) {
    this.defaultCurrency = e.target.value;
  }

  defaultPresentCurrency() {
    this.localStorageService.save('defaultPresent', this.defaultCurrency);
  }

  defaultBaseCurrency() {
    this.localStorageService.save('defaultBase', this.defaultCurrency);
  }

  ngOnDestroy(): void {
    this.$subs.unsubscribe();
  }
}
