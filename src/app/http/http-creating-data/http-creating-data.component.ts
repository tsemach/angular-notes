import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-creating-data',
  templateUrl: './http-creating-data.component.html',
  styleUrls: ['./http-creating-data.component.css']
})
export class HttpCreatingDataComponent implements OnInit {

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

  ngOnInit() {
  }

}
