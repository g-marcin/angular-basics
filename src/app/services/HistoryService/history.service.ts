import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { format, subDays } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  baseURL = 'https://api.frankfurter.app/';

  constructor(private httpClient: HttpClient) {}

  getCurrencyHistory(baseCurrency: string) {
    //TODO:type the history response
    const date = new Date();
    const dateFrom = format(date, 'yyyy-MM-dd');
    const dateTo = format(subDays(date, 12), 'yyyy-MM-dd');
    return this.httpClient.get<any>(
      `${this.baseURL}${dateTo}..${dateFrom}?from=${baseCurrency}`
    );
  }
}
