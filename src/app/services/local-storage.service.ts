import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  get(key: string) {
    const value = localStorage.getItem(key);
    return value;
  }
  save(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
