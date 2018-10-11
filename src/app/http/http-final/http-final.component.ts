import { Component, OnInit } from '@angular/core';
import { HttpFinalService } from './services/http-final.service';
import { HttpError } from './common/http.error';
import { HttpNotFoundError } from './common/http-not-found.error';
import { HttpBadInputError } from './common/http-bad-request.error';

@Component({
  selector: 'app-http-final',
  templateUrl: './http-final.component.html',
  styleUrls: ['./http-final.component.css']
})
export class HttpFinalComponent implements OnInit {

  input = '';
  posts: any[];
    
  constructor(private http: HttpFinalService) {    
  }

  ngOnInit() {
    this.http.getAll()
      .subscribe(posts => this.posts = posts);      
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }    
    this.posts.splice(0, 0, post);   // don't delete, add in place 0 the post object

    input.value = '';

    this.http.create(post)
      .subscribe(newPost => {
        console.log('[final:createPost] response.json() = ' + newPost);
        post['id'] = newPost.id;

      }, 
      (error: HttpError) => {
        if (error instanceof HttpBadInputError) {
          this.posts.splice(0, 1);
          
          alert('POST: bad request.');
          this.input = 'ERROR: ';
        }
        else throw error;
      });
  }

  updatePost(post) {
    this.http.update(post)
      .subscribe(updatePost => {
        console.log(updatePost);
        this.input = JSON.stringify(updatePost);
      });
  }

  deletePost(post) {
    this.input = JSON.stringify(post);
    console.log('[http.final:deletePost] going to delete post.id = ' + post.id);

    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.http.delete(post.id)
      .subscribe(
        null, 
        (error: HttpError) => {
          this.posts.splice(index, 0, post);   // don't delete, add in place 0 the post object

          if (error instanceof HttpNotFoundError) {
            console.log('found HttpNotFoundError');
            alert('This post is already deleted');
          }
          else throw error;
        });
  }
  
}
