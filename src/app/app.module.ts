import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HtmlAttrComponent } from './basic/html-attr/html-attr.component';
import { BootstrapComponent } from './basic/bootstrap/bootstrap.component';
import { ClassBindingComponent } from './basic/class-binding/class-binding.component';
import { EventPropagationComponent } from './basic/event-propagation/event-propagation.component';
import { EventFilteringComponent } from './basic/event-filtering/event-filtering.component';
import { TemplateVariabelsComponent } from './basic/template-variabels/template-variabels.component';
import { NgContantComponent } from './basic/ng-contant/ng-contant.component';
import { TwoWayBindingComponent } from './basic/two-way-binding/two-way-binding.component';
import { BasicComponent } from './basic/basic.component';
import { AppFormsModule } from './forms/forms.module';
import { AppHttpModule } from './http/http.module';
// import { FormsComponent } from './forms/forms.component';
// import { FormNgmodelComponent } from './forms/form-ngmodel/form-ngmodel.component';
// import { FormValidationsComponent } from './forms/form-validations/form-validations.component';
// import { FormNgformComponent } from './forms/form-ngform/form-ngform.component';
// import { FormNgmodelgroupComponent } from './forms/form-ngmodelgroup/form-ngmodelgroup.component';
// import { FormDisablesubmitComponent } from './forms/form-disablesubmit/form-disablesubmit.component';
// import { FormAngularComponent } from './forms/form-examples/form-angular/form-angular.component';
// import { FormExerciseComponent } from './forms/form-examples/form-exercise/form-exercise.component';
// import { FormExamplesComponent } from './forms/form-examples/form-examples.component';
import { RoutingComponent } from './routing/routing.component';
import { AppBootstrapModule } from './bootstrap/bootstrap.module';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlAttrComponent,
    BootstrapComponent,
    ClassBindingComponent,
    EventPropagationComponent,
    EventFilteringComponent,
    TemplateVariabelsComponent,
    NgContantComponent,
    TwoWayBindingComponent,
    BasicComponent,
    // FormsComponent,
    // FormNgmodelComponent,
    // FormValidationsComponent,
    // FormNgformComponent,
    // FormNgmodelgroupComponent,
    // FormDisablesubmitComponent,
    // FormAngularComponent,
    // FormExerciseComponent,
    // FormExamplesComponent,
    RoutingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppBootstrapModule,
    AppFormsModule,
    AppHttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
