import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryFlagComponent } from './components/country-flag/country-flag.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { AdminComponent, BaseComponent, CurrencyItemComponent, DetailsComponent, DisplayComponent, ExchangeComponent, HistoryComponent, HistoryItemComponent, LatestComponent, ListComponent } from './modules';

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
