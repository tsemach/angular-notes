import { HttpMoshService } from './services/http-mosh.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-mosh',
  templateUrl: './http-mosh.component.html',
  styleUrls: ['./http-mosh.component.css']
})
export class HttpMoshComponent implements OnInit {

  followers: any[];

  constructor(private service: HttpMoshService) {     
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers.slice(0, 5));
  }

}
