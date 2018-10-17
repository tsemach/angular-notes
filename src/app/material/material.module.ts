
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';

import { MaterialModule } from '../app-metarial-module';
import { MaterialComponent } from './material.component';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { AddServiceComponent } from './material-dialog/add-service/add-service.component';
import { SimpleDialogComponent } from './material-dialog/simple-dialog/simple-dialog.component';

const appRoutes: Routes = [
  { path: 'material', 'component': MaterialComponent },
];

@NgModule({
  declarations: [  
    MaterialComponent,
    MaterialDialogComponent,
    MaterialButtonComponent,
    AddServiceComponent,
    SimpleDialogComponent
  ],
  entryComponents: [
    AddServiceComponent,
    SimpleDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
    // MatCheckboxModule,
    // MatDialogModule,
    // MatButtonModule,
    // MatIconModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatInputModule,
  ],
  exports: [RouterModule]
})
export class AppMaterialModule {
}
