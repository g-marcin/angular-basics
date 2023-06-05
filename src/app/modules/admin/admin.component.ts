import { Component } from '@angular/core';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';
import { LocalStorageService } from 'src/app/services/LocalStorageService/local-storage.service';

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
  defaultButtonHandler() {
    this.localStorageService.save('defaultCurrency', this.defaultCurrency);
  }
}
