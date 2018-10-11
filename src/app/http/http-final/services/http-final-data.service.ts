import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpError } from '../common/http.error';
import { HttpNotFoundError } from '../common/http-not-found.error';
import { HttpBadInputError } from '../common/http-bad-request.error';

@Injectable({
  providedIn: 'root'
})
export class HttpFinalDataService {
  
  //url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private url: string, private http: Http) { }

  getAll() {    
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {    
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id) {
    console.log('[http-final-data.service:deletePost] going to delete id = ' + id);
    return this.http.delete(this.url + '/' + id)    
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new HttpBadInputError(error.json()));
    }
  
    if (error.status === 404) {
      return Observable.throw(new HttpNotFoundError());
    }
    return Observable.throw(new HttpError(error.json()));
  }
}
  