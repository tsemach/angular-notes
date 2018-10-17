

import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';

import { FormsComponent } from './forms.component';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { FormNgmodelComponent } from './form-ngmodel/form-ngmodel.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { FormNgformComponent } from './form-ngform/form-ngform.component';
import { FormNgmodelgroupComponent } from './form-ngmodelgroup/form-ngmodelgroup.component';
import { FormDisablesubmitComponent } from './form-disablesubmit/form-disablesubmit.component';
import { FormAngularComponent } from './form-examples/form-angular/form-angular.component';
import { FormExerciseComponent } from './form-examples/form-exercise/form-exercise.component';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { FormsServicesComponent } from './forms-services/forms-services.component';
import { FormsServiceAddComponent } from './forms-services/forms-service-add/forms-service-add.component';
import { FormSimpleDialogComponent } from './form-simple-dialog/form-simple-dialog.component';
import { MaterialModule } from 'src/app/app-metarial-module';

const appRoutes: Routes = [
    { path: 'forms', 'component': FormsComponent, children: [
        { path: 'examples', 'component': FormExamplesComponent },
        { path: 'services', 'component': FormsServicesComponent }
    ] },
  ];

@NgModule({
  declarations: [
    FormsComponent,
    FormBasicComponent,
    FormNgmodelComponent,
    FormValidationsComponent,
    FormNgformComponent,
    FormNgmodelgroupComponent,
    FormDisablesubmitComponent,
    FormAngularComponent,
    FormExerciseComponent,
    FormExamplesComponent,
    FormsServicesComponent,
    FormsServiceAddComponent,
    FormSimpleDialogComponent
  ],
  entryComponents: [    
    FormSimpleDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    // MatCheckboxModule,
    // MatDialogModule,
    // MatButtonModule,
    // MatIconModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatInputModule,

    MaterialModule

  ],
  providers: [],
  exports: [RouterModule]
})
export class AppFormsModule { }
