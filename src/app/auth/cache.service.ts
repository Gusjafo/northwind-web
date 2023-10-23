import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class CacheService {
  protected getItem<T>(key: string, defaultValue: T): T {
    const data = localStorage.getItem(key);
    if (data && data !== 'undefinned') {
      try {
        return JSON.parse(data);
      } catch (error) {
        console.error(`Error parsing JSON for key "${key}":`, error);
      }
    }
    return defaultValue;
  }

  protected setItem(key: string, data: object | string) {
    if (typeof data === 'string') {
      localStorage.setItem(key, data);
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  protected removeItem(key: string) {
    localStorage.removeItem(key);
  }

  protected clear() {
    localStorage.clear();
  }
}
