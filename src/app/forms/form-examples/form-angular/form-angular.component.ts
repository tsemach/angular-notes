import { Hero } from './hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-angular',
  templateUrl: './form-angular.component.html',
  styleUrls: ['./form-angular.component.css']
})
export class FormAngularComponent {                 

 powers = ['Really Smart', 
           'Super Flexible',
           'Super Hot', 
           'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(heroForm) { 
    this.submitted = true; 
    console.log("heroForm = ", heroForm);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  log(what) {
    console.log(what);
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
  
}
