import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpError } from '../common/http.error';
import { HttpNotFoundError } from '../common/http-not-found.error';
import { HttpBadInputError } from '../common/http-bad-request.error';

@Injectable({
  providedIn: 'root'
})
export class HttpExtractService {

  url = 'http://localhost:3000/http/';
  //url = 'http://jsonplaceholder.typicode.com/'

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url + 'get');
    //return this.http.get(this.url + 'posts');
  }

  createPost(post) {
    return this.http.post(this.url + 'post', post)
    //return this.http.post(this.url + 'posts', JSON.stringify(post))
      .catch((error: Response) => {
        if (error.status === 400) {
          console.log("createPost: in if");
          return Observable.throw(new HttpBadInputError(error.json()));
        }
        return Observable.throw(new HttpError(error.json()));
      });
  }

  updatePost(post) {
    return this.http.put(this.url + 'put/' + post.id, post);
    //return this.http.patch(this.url + 'posts/' + post.id, JSON.stringify({isRead: true}));
  }

  deletePost(id) {
    console.log('[http.service:deletePost] going to delete post.id = ' + id);
    return this.http.delete(this.url + 'delete/' + id)
      .catch((error: Response) => {
        console.log("deletePost: status = " + error.status);
        if (error.status === 404) {
          console.log("deletePost: in if");
          return Observable.throw(new HttpNotFoundError());
        }
        return Observable.throw(new HttpError(error.json()));
      });
  }
}
