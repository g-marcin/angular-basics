import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/CurrencyService/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  $subs: Subscription = new Subscription();
  detailsURL = '';
  constructor(
    private router: Router,
    private currencyService: CurrencyService
  ) {}
  ngOnInit() {
    this.$subs.add(
      this.currencyService.presentCurrency$.subscribe((value) => {
        this.detailsURL = `details/${value}`;
      })
    );
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  ngOnDestroy() {
    this.$subs.unsubscribe();
  }
}
