import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form-simple-dialog',
  templateUrl: './form-simple-dialog.component.html',
  styleUrls: ['./form-simple-dialog.component.scss']
})
export class FormSimpleDialogComponent implements OnInit {
  description = 'Form Add Service';

  name = '';
  host = '';
  port = '';

  constructor(private dialogRef: MatDialogRef<FormSimpleDialogComponent>) {
  }

  ngOnInit() {
  }
  
  save() {
    this.dialogRef.close({name: this.name, host: this.host, port: +this.port});
  }

  cancel() {
    this.dialogRef.close();
  }
}
