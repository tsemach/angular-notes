import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:3000/http/';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url + 'get');
  }

  createPost(post) {
    return this.http.post(this.url + 'post', post);
  }

  updatePost(post) {
    return this.http.put(this.url + 'put/' + post.id, post);
  }

  deletePost(id) {
    return this.http.delete(this.url + 'delete/' + id);      
  }
}
