import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  option1_data = '';
  option2_data = '';

  email1 = 'you@someplace.com';
  email2 = 'me@elsewhere.com';

  constructor() { }

  ngOnInit() {
  }

  onKeyUp1() {    
    console.log("[onKeyUp1: email = ", this.email1);
    this.option1_data = this.email1;
  }

  onKeyUp2() {    
    console.log("[onKeyUp2: email = ", this.email2);
    this.option2_data = this.email2;
  }
}
