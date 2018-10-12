import { HttpMoshService } from './http-mosh/services/http-mosh.service';

import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpComponent } from './http.component';
import { HttpGettingDataComponent } from './http-getting-data/http-getting-data.component';
import { HttpCreatingDataComponent } from './http-creating-data/http-creating-data.component';
import { HttpUpdatingDataComponent } from './http-updating-data/http-updating-data.component';
import { HttpExtractServiceComponent } from './http-extract-service/http-extract-service.component';
import { HttpExtractService } from './http-extract-service/services/http-extract-service.service';
import { HttpDeletingDataComponent } from './http-deleting-data/http-deleting-data.component';
import { HttpFinalComponent } from './http-final/http-final.component';
import { HttpFinalService } from './http-final/services/http-final.service';
import { HttpErrorHandler } from './common/http-error-nadler';
import { HttpMoshComponent } from './http-mosh/http-mosh.component';

const appRoutes: Routes = [
  { path: 'http', 'component': HttpComponent , children: [
      { path: 'mosh', 'component': HttpMoshComponent }
    ]
  }
];

@NgModule({
  declarations: [
    HttpComponent,
    HttpGettingDataComponent,
    HttpCreatingDataComponent,
    HttpUpdatingDataComponent,
    HttpExtractServiceComponent,
    HttpDeletingDataComponent,
    HttpFinalComponent,
    HttpMoshComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpModule,    
  ],
  providers: [
    HttpExtractService, 
    HttpFinalService,
    HttpMoshService,
    { provide: ErrorHandler, useClass: HttpErrorHandler}    
  ],
  exports: [RouterModule]
})
export class AppHttpModule { }
