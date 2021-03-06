import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HtmlAttrComponent } from './basic/html-attr/html-attr.component';
import { BootstrapComponent } from './basic/bootstrap/bootstrap.component';
import { ClassBindingComponent } from './basic/class-binding/class-binding.component';
import { EventPropagationComponent } from './basic/event-propagation/event-propagation.component';
import { EventFilteringComponent } from './basic/event-filtering/event-filtering.component';
import { TemplateVariabelsComponent } from './basic/template-variabels/template-variabels.component';
import { NgContantComponent } from './basic/ng-contant/ng-contant.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TwoWayBindingComponent } from './basic/two-way-binding/two-way-binding.component';
import { BasicComponent } from './basic/basic.component';
import { AppFormsModule } from './forms/forms.module';
import { AppHttpModule } from './http/http.module';
import { RoutingComponent } from './routing/routing.component';
import { DirectiveComponent } from './basic/directive/directive.component';
import { InputFormatDirective } from './basic/directive/input-format.directive';
import { AppBootstrapModule } from './bootstrap/bootstrap.module';
//import { MaterialComponent } from './material/material.component';
import { AppMaterialModule } from './material/material.module';

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
    RoutingComponent,    
    DirectiveComponent,
    InputFormatDirective,
    //MaterialComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    BrowserAnimationsModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    AppFormsModule,
    AppHttpModule,
    AppBootstrapModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
