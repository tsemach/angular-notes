import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss']
})
export class SimpleDialogComponent implements OnInit {
  description = 'Add Service';

  name = '';
  host = '';
  port = '';

  constructor(private dialogRef: MatDialogRef<SimpleDialogComponent>) {
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
