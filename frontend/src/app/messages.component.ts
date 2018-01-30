import { Component, OnInit } from '@angular/core';
import { WebService } from "./web.service"
import { ActivatedRoute } from "@angular/router"
import { Observable } from 'rxjs';

@Component({
  selector: 'messages',
  template: `
  	<div *ngFor="let message of messages ">
  		<mat-card class="card">
  		<mat-card-title [routerLink]="['/messages', message.user]" style="cursor:pointer"> {{message.user}}</mat-card-title>
  		<mat-card-content> {{message.text}} </mat-card-content>
  		</mat-card>
  	</div>
  `,
})
export class MessagesComponent implements OnInit {

  constructor(public webService: WebService, private route: ActivatedRoute){}

  messages;

  ngOnInit(){
    var name =this.route.snapshot.params.name;
    this.webService.getMessages(name);
    this.webService.messages.subscribe(messages=>{
      this.messages = messages
      console.log(this.messages)
    })

  }
}
