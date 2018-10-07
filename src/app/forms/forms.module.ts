
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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

const appRoutes: Routes = [
    { path: 'forms', 'component': FormsComponent, children: [
        { path: 'examples', 'component': FormExamplesComponent }
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppFormsModule { }
