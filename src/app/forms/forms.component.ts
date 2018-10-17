import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormSimpleDialogComponent } from './form-simple-dialog/form-simple-dialog.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openFormSimpleDialog() {
    console.log("openFormSimpleDialog click");

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = "100%";
    // dialogConfig.height = "100%";

    this.dialog.open(FormSimpleDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(result => {
        console.log(result);
      });

  }
}
