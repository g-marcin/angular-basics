import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './modules/exchange/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './modules/exchange/display/display.component';
import { HistoryComponent } from './modules/exchange/display/history/history.component';
import { BaseComponent } from './modules/exchange/display/base/base.component';
import { LatestComponent } from './modules/exchange/display/latest/latest.component';
import { CurrencyItemComponent } from './modules/exchange/list/currency-item/currency-item.component';
import { ExchangeComponent } from './modules/exchange/exchange.component';
import { AdminComponent } from './modules/admin/admin.component';
import { DetailsComponent } from './modules/details/details.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DisplayComponent,
    HistoryComponent,
    BaseComponent,
    LatestComponent,
    CurrencyItemComponent,
    ExchangeComponent,
    AdminComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
