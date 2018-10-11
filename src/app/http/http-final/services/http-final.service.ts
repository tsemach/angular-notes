import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { HttpFinalDataService } from './http-final-data.service';

@Injectable({
  providedIn: 'root'
})
export class HttpFinalService extends HttpFinalDataService {
  
  // url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(http: Http) { 
    super('http://jsonplaceholder.typicode.com/posts', http);
  }

}
  