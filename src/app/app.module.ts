import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FooterComponent,
  HeaderComponent,
  CurrencyItemComponent,
  CountryFlagComponent,
  HistoryItemComponent,
} from './components';

import {
  AdminComponent,
  BaseComponent,
  DetailsComponent,
  DisplayComponent,
  ExchangeComponent,
  HistoryComponent,
  LatestComponent,
  ListComponent,
} from './pages';

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
    HistoryItemComponent,
    CountryFlagComponent,
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
