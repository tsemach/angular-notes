import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  name = 'tsemach';
  category = '';
  submitted = false;
  isGuarantee = false;

  categories = [
    'Development', 
    'Art',
    'Photographic'
  ];

  constructor(private dialogRef: MatDialogRef<AddServiceComponent>, @Inject(MAT_DIALOG_DATA) data: any) {    
    console.log('AddServiceComponent', data);
    data.age = 57;
  }

  ngOnInit() {
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify({
    name: this.name,
    category: this.category,
    isGuarantee: this.isGuarantee}
  )}

  log(what) {
    console.log(what);
  }

  isOnGuarantee(value) {
    this.isGuarantee = value;
  }

  onSubmit(heroForm) {
    this.submitted = true;
    console.log('name = ' + this.name + ', category = ' + this.category);
  }

  newCourse() {
    this.name = '';
    this.category = '';
    this.isGuarantee = false;
  }

  save() {
    this.dialogRef.close({name: this.name, age: 58});
  }

  close() {
    this.dialogRef.close();
  }

}
