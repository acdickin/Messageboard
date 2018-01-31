import { Component, OnInit } from '@angular/core';
import { WebService } from "./web.service"
import { ActivatedRoute } from "@angular/router"
import { Observable } from 'rxjs';

@Component({
  selector: 'messages',
  template: `
  	<div *ngFor="let message of webService.messages | async ">
  		<mat-card class="card">
  		<mat-card-title [routerLink]="['/messages/', message.user]" style="cursor:pointer"> {{message.user}}</mat-card-title>
  		<mat-card-content> {{message.text}} </mat-card-content>
  		</mat-card>
  	</div>
  `,
})
export class MessagesComponent implements OnInit {

  constructor(public webService: WebService, private route: ActivatedRoute){}



  ngOnInit(){
    var name =this.route.snapshot.params.user;
   
    (name)? this.webService.getMessages(name) : this.webService.getAllMessages();
    this.webService.getUser().subscribe();
  
    

  }
}
