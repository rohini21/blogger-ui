import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { RestfulService }  from './rest.service';
import { UtilsService }  from '../utils.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BuiltApiService {
  
  private headers = {'Content-Type': 'application/json'};
  constructor(
    private RestfulService: RestfulService, 
    private UtilsService: UtilsService
  ) {}

  User(): any {
    let that = this;

    return {
      getSession(): any {
        return that.RestfulService.client()({
          path: '/user/session',
          method: "GET",
          headers: that.headers
        }).then(that.UtilsService.wrapper(''))
      },
      login(data:any): any {
        console.log("data['body']", data['body'])
        return that.RestfulService.client()({
          path: '/user/login',
          method: "POST",
          entity: data['body'],
          headers: that.headers
        })
      },
      logout(): any {
        return that.RestfulService.client()({
          path: '/user/logout',
          method: "DELETE",
          headers: that.headers
        })
      },
      signup(data:any): any {
        return that.RestfulService.client()({
          path: '/user',
          method: "POST",
          entity: data['body'],
          headers: that.headers
        })
      },
      getOne(data: any): any {
        return that.RestfulService.client()({
          path: '/user/'+ data.params.uid,
          method: "GET",
          entity: data['body'],
          headers: that.headers
        })
      },
      getAll(data: any): any {
        var term = data.params.term ? data.params.term : "";
        return that.RestfulService.client()({
          path: '/user?term='+ term,
          method: "GET",
          headers: that.headers
        })
      }, 
      deleteProfile(data: any): any {
        return that.RestfulService.client()({
          path: '/user/'+ data.params.uid,
          method: "DELETE",
          headers: that.headers
        })
      }
    }
  }

  Blog(): any {
    let that = this;

    return {
      getOne(data: any): any {
        return that.RestfulService.client()({
          path: '/blog/'+ data.params.uid,
          method: "GET",
          headers: that.headers
        })
      },
      getAll(data: any): any {
        var term = data.params.term ? data.params.term : "";
        var owner_uid = data.params.owner_uid ? data.params.owner_uid : "";
        return that.RestfulService.client()({
          path: '/blog?term='+ term + '&owner_uid='+ owner_uid,
          method: "GET",
          headers: that.headers
        })
      }, 
      getUserBlogs(data: any): any {
        var owner_uid = data.params.owner_uid ? data.params.owner_uid : "";
        var urlExt = "/blog" + (data.params.published ? "/published" : "")
        return that.RestfulService.client()({
          path: '/user/'+ owner_uid + urlExt,
          method: "GET",
          headers: that.headers
        })
      },
      delete(data: any): any {
        return that.RestfulService.client()({
          path: '/blog/'+ data.params.uid,
          method: "DELETE",
          headers: that.headers
        })
      }, 
      update(data: any): any {
        return that.RestfulService.client()({
          path: '/blog/'+ data.params.uid,
          method: "PUT",
          entity: data['body'],
          headers: that.headers
        })
      }, 
      create(data: any): any {
        return that.RestfulService.client()({
          path: '/blog',
          method: "POST",
          entity: data['body'],
          headers: that.headers
        })
      }
    }
  }
}