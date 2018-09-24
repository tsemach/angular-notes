import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-disablesubmit',
  templateUrl: './form-disablesubmit.component.html',
  styleUrls: ['./form-disablesubmit.component.css']
})
export class FormDisablesubmitComponent {

  constructor() { }

  log(what) {
    console.log(what);
  }

  submit(fm) {
    console.log("fm = ", fm);
  }
}
