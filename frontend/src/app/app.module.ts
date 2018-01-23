import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './new-messages.component'

import { WebService } from './web.service'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import {
	MatButtonModule,
	MatCardModule,
	MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
}from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, MessagesComponent,NewMessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
		MatInputModule,
	  MatSnackBarModule,
	  MatToolbarModule,
    HttpModule,
    FormsModule 
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
