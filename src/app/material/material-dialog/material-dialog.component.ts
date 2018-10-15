
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddServiceComponent } from './add-service/add-service.component';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss']
})
export class MaterialDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openSimpleDialog() {
    console.log("openSimpleDialog click");

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = "100%";
    // dialogConfig.height = "100%";

    this.dialog.open(SimpleDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }

  openAddServiceDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {name: 'tsemach', age: 56};

    const dialogRef = this.dialog.open(AddServiceComponent, dialogConfig);    
    dialogRef.afterClosed()
      .subscribe(result => {      
        console.log('Dialog result:', result);
        console.log('MaterialDialogComponent', dialogConfig.data);
      });
  }
}
