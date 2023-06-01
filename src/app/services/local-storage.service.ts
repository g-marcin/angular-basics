import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  get(key: string) {
    const list = localStorage.getItem(key);
    if (list) {
      return JSON.parse(list);
    }
    return [];
  }

  save(key: string, list: string[]) {
    localStorage.setItem(key, JSON.stringify(list));
  }
}
