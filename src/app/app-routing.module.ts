
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { FormsComponent } from './forms/forms.component';
import { FormAngularComponent } from './forms/form-examples/form-angular/form-angular.component';
import { FormExerciseComponent } from './forms/form-examples/form-exercise/form-exercise.component';
import { FormExamplesComponent } from './forms/form-examples/form-examples.component';
import { RoutingComponent } from './routing/routing.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

const appRoutes: Routes = [
  { path: '', 'component': BasicComponent },
  { path: 'basic', 'component': BasicComponent },
  { path: 'forms', 'component': FormsComponent, children: [
  ] },
  { path: 'routing', 'component': RoutingComponent },
  { path: 'bootstrap', 'component': BootstrapComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
