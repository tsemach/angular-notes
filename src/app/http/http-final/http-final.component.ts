import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-http-final',
  templateUrl: './http-final.component.html',
  styleUrls: ['./http-final.component.css']
})
export class HttpFinalComponent implements OnInit {

  input = '';
  posts: any[];
    
  constructor(private http: HttpService) {    
  }

  ngOnInit() {
    this.http.getPosts()
      .subscribe(response =>  {
          console.log(response.json());
          this.posts = response.json();
        }, 
        (error) => {
          alert('GET: An unexpected error occurred.');
          console.log(error);
        });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';

    this.http.createPost(post)
      .subscribe(response => {
        post['id'] = response.json().id;

        // don't delete, add in place 0 the post object
        this.posts.splice(0, 0, post);
      }, 
      (error) => {
        alert('POST: An unexpected error occurred.');
        console.log(error);
      });
  }

  updatePost(post) {
    this.http.updatePost(post)
      .subscribe(response => {
        console.log(response);
        this.input = JSON.stringify(response.json());
      }, 
      (error) => {
        alert('PUT: An unexpected error occurred.');
        console.log(error);
      });
  }

  deletePost(post) {
    this.http.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, 
      (error) => {
        alert('DELETE: An unexpected error occurred.');
        console.log(error);
      });
  }
  
}
