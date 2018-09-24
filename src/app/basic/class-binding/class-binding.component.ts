import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  active = false;

  yellow = 'yellow';
  
  constructor() { }

  ngOnInit() {
  }

  onClickMe() {    
    this.active = ! this.active;  
    console.log("[ClassBindingComponent:onClickMe] this.active = " + this.active);
  }

}
