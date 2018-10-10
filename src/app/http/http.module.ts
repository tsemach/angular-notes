
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpComponent } from './http.component';
import { HttpGettingDataComponent } from './http-getting-data/http-getting-data.component';
import { HttpCreatingDataComponent } from './http-creating-data/http-creating-data.component';
import { HttpUpdatingDataComponent } from './http-updating-data/http-updating-data.component';
import { HttpExtractServiceComponent } from './http-extract-service/http-extract-service.component';
import { HttpService } from './http.service';
import { HttpDeletingDataComponent } from './http-deleting-data/http-deleting-data.component';
import { HttpFinalComponent } from './http-final/http-final.component';

const appRoutes: Routes = [
  { path: 'http', 'component': HttpComponent },
];

@NgModule({
  declarations: [
    HttpComponent,
    HttpGettingDataComponent,
    HttpCreatingDataComponent,
    HttpUpdatingDataComponent,
    HttpExtractServiceComponent,
    HttpDeletingDataComponent,
    HttpFinalComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [HttpService],
  exports: [RouterModule]
})
export class AppHttpModule { }
