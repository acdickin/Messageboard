import { Component} from '@angular/core';
import {WebService} from "./web.service"
@Component({
  selector: 'new-messages',
  template: `
    <mat-card class="card"  >
    <mat-card-content> 
      <mat-form-field >
        <input [(ngModel)]="message.user" matInput placeholder="Name" >
      </mat-form-field>

      <mat-form-field class="commentbox">
        <textarea matInput  [(ngModel)]="message.text" placeholder="Leave a comment" ></textarea>
      </mat-form-field>
      <button (click)="post()" color="primary" mat-button> 
        POST
      </button>
     </mat-card-content>
  </mat-card>

  `,
})
export class NewMessagesComponent  {
  constructor(private webService: WebService){}
  
  
  message={
    user:"",
    text:""
  }
  post(){
    this.webService.postMessage(this.message)
  }
}