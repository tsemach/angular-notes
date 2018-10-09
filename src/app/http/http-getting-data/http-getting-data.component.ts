import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http-getting-data',
  templateUrl: './http-getting-data.component.html',
  styleUrls: ['./http-getting-data.component.css']
})
export class HttpGettingDataComponent implements OnInit {
  
  posts: any[];

  constructor(http: Http) {     
    http.get('http://localhost:3000/http/get')
      .subscribe(response =>  {
          console.log(response.json());
          this.posts = response.json();
        }
      );
  }

  ngOnInit() {
  }

}
