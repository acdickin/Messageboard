import { Component, ngOnInit } from '@angular/core';
import {WebService} from "./web.service"
@Component({
  selector: 'messages',
  template: `
  	<div *ngFor="let msg of msgs">
  		<mat-card style="margin:8px"	>
  		<mat-card-title> {{msg.user}}</mat-card-title>
  		<mat-card-content> {{msg.text}} </mat-card-content>
  		</mat-card>
  	</div>

  `,
})
export class MessagesComponent implements OnInit {
  constructor(private webService: WebService){}
  
  async ngOnInit(){
   var response= await this.webService.getMessages()
   this.msgs=  response.json();
  }
  msgs=[];
}