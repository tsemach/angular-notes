import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variabels',
  templateUrl: './template-variabels.component.html',
  styleUrls: ['./template-variabels.component.css']
})
export class TemplateVariabelsComponent implements OnInit {

  option1_data = '';
  option2_data = '';

  constructor() { }

  ngOnInit() {
  }

  onKeyUp1($event) {
    console.log("onKeyUp1 - value: ", $event.target.value);
    this.option1_data = $event.target.value;
  }

  onKeyUp2(email) {
    console.log("onKeyUp2 - value: ", email);
    this.option2_data = email;
  }
}
