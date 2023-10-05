import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private ls = window.localStorage;
  constructor() { }

  public setItem(key: any, value: any) {
    value = JSON.stringify(value);
    this.ls.setItem(key, value);
    return true;
  }

  public getItem(key: any) {
    const value = this.ls.getItem(key);
    try {
      if (value)
        return JSON.parse(value);
      else 
        return null;
    } catch (e) {
      // console.log(e)
      return null;
    }
  }
  public clear() {
    this.ls.clear();
  }
}
