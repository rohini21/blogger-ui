import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UtilsService {
  
  constructor() {}

  createUid(): any {
    return 'b'+ Math.random().toString(12).substring(2);
  }

  wrapper(wrap: string): any {
      if (!!wrap) {
        return function(res) {
          return res.entity[wrap];
        }
      } else {
        return function(res) {
          return res.entity;
        }
      }
    }
}

