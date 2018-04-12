import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BuiltApiService } from './built-api/builtapi.service';
import { UtilsService } from './utils.service';


@Injectable()
export class UserService {
  private storage = window.localStorage;
  private headers = new Headers({'Content-Type': 'application/json'});
  private user    = new Subject<object>();
  private currUser;

  constructor(
    private UtilsService: UtilsService,
    private BuiltApiService: BuiltApiService
  ) {}

  getSession(): any {
    return this.BuiltApiService.User().getSession();
  }
  getCurrUserUid(): any {
    return this.currUser ? this.currUser.uid : ""
  }
  setCurrentUser(user: object) {
    this.currUser = user;
    this.user.next(user);
  }

  listenToCurrentUser(): Observable<object> {
    return this.user.asObservable();
  }
  getCurrentUser(): any {
    return this.currUser;
  }
  getUsers(data: any): any {
    return this.BuiltApiService.User().getAll({
      "params": {
        "term": data.term
      }
    })
  }
  
  getProfileUser(uid: string): any {
    return this.BuiltApiService.User().getOne({
      "params": {
        "uid": uid 
      }
    })
  }
  
  logout(): any {
    return this.BuiltApiService.User().logout()
  }
  
  signin(user: object): any {
    if(!user['username'] || !user['password']) {
      return Promise.reject('Enter your name and password!');
    }
    
    return this.BuiltApiService.User().login({
      "body": user
    })
  }

  signup(user: object): any {
    return this.BuiltApiService.User().signup({
      "body": {
        user: user
      }
    })
  } 
}