import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { HttpMoshDataService } from './http-mosh-data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpMoshService extends HttpMoshDataService {
  
  // url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(http: Http) { 
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }

}
  