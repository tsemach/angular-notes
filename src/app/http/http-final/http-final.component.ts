import { Component, OnInit } from '@angular/core';
import { HttpFinalService } from './services/http-final.service';
import { HttpFinalError } from './common/http-final.error';
import { HttpFinalNotFoundError } from './common/http-final-not-found.error';
import { HttpFinalBadInputError } from './common/http-final-bad-request.error';

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
    // this.http.getAll()
    //   .subscribe(posts => this.posts = posts);      
    this.http.get(10)        
      .subscribe(posts => this.posts = posts.slice(0, 5))
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
      (error: HttpFinalError) => {
        if (error instanceof HttpFinalBadInputError) {
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
        (error: HttpFinalError) => {
          this.posts.splice(index, 0, post);   // don't delete, add in place 0 the post object

          if (error instanceof HttpFinalNotFoundError) {
            console.log('found HttpNotFoundError');
            alert('This post is already deleted');
          }
          else throw error;
        });
  }
  
}
