import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-ngmodelgroup',
  templateUrl: './form-ngmodelgroup.component.html',
  styleUrls: ['./form-ngmodelgroup.component.css']
})
export class FormNgmodelgroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(what) {
    console.log(what);
  }

  submit(fm) {
    console.log(fm);
  }
}
