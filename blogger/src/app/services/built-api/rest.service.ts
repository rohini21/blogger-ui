import { Injectable }    from '@angular/core';
import * as rest from 'rest';
import * as mime from 'rest/interceptor/mime';
import * as pathPrefix from 'rest/interceptor/pathPrefix';
import * as errorCode from 'rest/interceptor/errorCode';

@Injectable()
export class RestfulService {

  constructor(
  ) {}

  client(): any {
    return rest.wrap(mime, {
    	mime: 'application/json'
    })
    .wrap(errorCode)
    .wrap(pathPrefix, { 
    	prefix: '/api'
    })
  }
}