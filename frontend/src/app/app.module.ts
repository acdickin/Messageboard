import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './new-messages.component'
import { NavComponent } from './nav.component'
import { HomeComponent } from './home.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component'


import { WebService } from './web.service'
import { AuthService } from './auth.service'

var routes=[
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'messages/:user',
    component: MessagesComponent
  },
  {
    path:'message',
    component: MessagesComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
 {
    path:'user',
    component: UserComponent
  },

]

import {
	MatButtonModule,
	MatCardModule,
	MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
}from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessagesComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent
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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
