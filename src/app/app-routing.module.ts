
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { FormsComponent } from './forms/forms.component';
import { FormAngularComponent } from './forms/form-examples/form-angular/form-angular.component';
import { FormExerciseComponent } from './forms/form-examples/form-exercise/form-exercise.component';
import { FormExamplesComponent } from './forms/form-examples/form-examples.component';
import { RoutingComponent } from './routing/routing.component';

const appRoutes: Routes = [
  { path: '', 'component': BasicComponent },
  { path: 'basic', 'component': BasicComponent },
  { path: 'forms', 'component': FormsComponent, children: [
    { path: 'examples', 'component': FormExamplesComponent },
  ] },
  { path: 'routing', 'component': RoutingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}