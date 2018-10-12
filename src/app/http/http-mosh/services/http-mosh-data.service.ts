import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpMoshError } from '../common/http-mosh.error';
import { HttpMoshNotFoundError } from '../common/http-mosh-not-found.error';
import { HttpMoshBadInputError } from '../common/http-mosh-bad-request.error';

@Injectable({
  providedIn: 'root'
})
export class HttpMoshDataService {
  
  //url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private url: string, private http: Http) { }

  getAll() {    
    return this.http.get(this.url)
      .map(response => response.json())      
      .catch(this.handleError);
  }

  get(limit: number) {    
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
      return Observable.throw(new HttpMoshBadInputError(error.json()));
    }
  
    if (error.status === 404) {
      return Observable.throw(new HttpMoshNotFoundError());
    }
    return Observable.throw(new HttpMoshError(error.json()));
  }
}
