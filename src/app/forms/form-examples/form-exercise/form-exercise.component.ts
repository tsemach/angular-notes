import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrls: ['./form-exercise.component.css']
})
export class FormExerciseComponent implements OnInit {

  name = '';
  category = '';
  submitted = false;
  isGuarantee = false;

  categories = [
    'Development', 
    'Art',
    'Photographic'
  ];

  constructor() { }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify({
    name: this.name,
    category: this.category,
    isGuarantee: this.isGuarantee}
  )};

  log(what) {
    console.log(what);
  }

  isOnGuarantee(value) {
    this.isGuarantee = value;
  }

  onSubmit(heroForm) { 
    this.submitted = true; 
    console.log("name = " + this.name + ", category = " + this.category);
  }

  newCourse() {
    this.name = '';
    this.category = '';
    this.isGuarantee = false;
  }
}
