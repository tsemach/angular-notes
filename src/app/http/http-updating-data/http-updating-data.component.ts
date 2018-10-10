import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-updating-data',
  templateUrl: './http-updating-data.component.html',
  styleUrls: ['./http-updating-data.component.css']
})
export class HttpUpdatingDataComponent implements OnInit {

  input = '';
  posts: any[];
  url = 'http://localhost:3000/http/';
    
  constructor(private http: Http) {
    http.get(this.url + 'get')
      .subscribe(response =>  {
          console.log(response.json());
          this.posts = response.json();
        }
      );
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';

    this.http.post(this.url + 'post', post)
      .subscribe(response => {
        post['id'] = response.json().id;

        // don't delete, add in place 0 the post object
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    this.http.put(this.url + 'put/' + post.id, post)
      .subscribe(response => {
        console.log(response);
        this.input = JSON.stringify(response.json());
      });
  }

  ngOnInit() {
  }

}
