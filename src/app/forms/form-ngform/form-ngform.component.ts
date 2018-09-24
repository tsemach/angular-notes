import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-ngform',
  templateUrl: './form-ngform.component.html',
  styleUrls: ['./form-ngform.component.css']
})
export class FormNgformComponent {

  submit(fm) {
    console.log(fm);
  }
  log(what) {
    console.log(what);
  }
}
