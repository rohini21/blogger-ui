import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocalStorageService {
  private storage = window.localStorage;
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor() { }

  getItem(key:string): any {
    return JSON.parse(this.storage.getItem(key))
  }
  setItem(key:string, data:any): any {
    this.storage.setItem(key, data)
  }
  removeItem(key:string): any {
    this.storage.removeItem(key);
  }
}