import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-service-add',
  templateUrl: './forms-service-add.component.html',
  styleUrls: ['./forms-service-add.component.css']
})
export class FormsServiceAddComponent implements OnInit {

  serviceName = '';
  job = '';
  submitted = false;
  isGuarantee = false;

  jobs = [
    'create',
    'delete',
    'update'
  ];

  constructor() { }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify({
    service: this.serviceName,
    job: this.job,
    isGuarantee: this.isGuarantee}
    // tslint:disable-next-line:semicolon
  )};

  log(what) {
    console.log(what);
  }

  isOnGuarantee(value) {
    this.isGuarantee = value;
  }

  onSubmit(heroForm) {
    this.submitted = true;
    console.log('service = ' + this.serviceName + ', job = ' + this.job);
  }

  newCourse() {
    this.serviceName = '';
    this.job = '';
    this.isGuarantee = false;
  }
}


