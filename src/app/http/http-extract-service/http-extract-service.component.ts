import { Component, OnInit } from '@angular/core';
import { HttpExtractService } from './services/http-extract-service.service';

@Component({
  selector: 'app-http-extract-service',
  templateUrl: './http-extract-service.component.html',
  styleUrls: ['./http-extract-service.component.css']
})
export class HttpExtractServiceComponent implements OnInit {

  input = '';
  posts: any[];
    
  constructor(private http: HttpExtractService) {    
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';

    this.http.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;

        // don't delete, add in place 0 the post object
        this.posts.splice(0, 0, post);
      });
  }

  updatePost(post) {
    this.http.updatePost(post)
      .subscribe(response => {
        console.log(response);
        this.input = JSON.stringify(response.json());
      });
  }

  deletePost(post) {
    console.log('[http-extract-service:deletePost] post = ' + JSON.stringify(post));
    console.log('[http-extract-service:deletePost] post["id"] = ' + post["id"]);
    this.http.deletePost(post['id'])
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
  }

  ngOnInit() {
    this.http.getPosts()
      .subscribe(response =>  {
          console.log(response.json());
          this.posts = response.json();
        }
      );
  }

}
