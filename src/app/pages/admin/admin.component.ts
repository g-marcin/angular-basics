import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services';
import { LocalStorageService } from 'src/app/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(
    private currencyService: CurrencyService,
    private localStorageService: LocalStorageService
  ) {}
  defaultCurrency = 'AUD';
  currencyCodes = [['', '']];
  ngOnInit(): void {
    this.currencyService.getCurrencyNames().subscribe((currencies) => {
      this.currencyCodes = Object.entries(currencies);
    });
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
}
