import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { LocalStorageService } from './localstorage.service';
import { UtilsService } from './utils.service';
import { BuiltApiService } from './built-api/builtapi.service';


@Injectable()
export class BlogService {
  private storage = window.localStorage;
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(
    private LocalStorageService: LocalStorageService,
    private UtilsService: UtilsService,
    private BuiltApiService: BuiltApiService
  ) {}

  getAll(data: any): any {
    return this.BuiltApiService.Blog().getAll({
      "params": {
        "term": data.term,
        "owner_uid": data.owner_uid
      }
    })
  }

  getUserBlogs(data: any): any {
    console.log("data---------", data)
    return this.BuiltApiService.Blog().getUserBlogs({
      "params": {
        "owner_uid": data.owner_uid,
        "published": data.published
      }
    })
  }

  getOne(blogUid: string): any {
    return this.BuiltApiService.Blog().getOne({
      "params": {
        "uid": blogUid 
      }
    })
  }

  create(data: any): any {
    return this.BuiltApiService.Blog().create({
      "body": {
        blog: data
      }
    })
  }

  update(data: any): any {
    return this.BuiltApiService.Blog().update({
      "body": {
        blog: data
      },
      "params": {
        uid: data.uid
      }
    })
  }

  delete(uid: string): any {
    return this.BuiltApiService.Blog().delete({
      "params": {
        uid: uid
      }
    })
  }
}