import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service'
import { HttpModule } from '@angular/http'
import {
	MatButtonModule,
	MatCardModule,
	MatInputModule,
  MatSnackBarModule,
  MatToolbarModule} 
 from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
		MatInputModule,
	  MatSnackBarModule,
	  MatToolbarModule,
    HttpModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
