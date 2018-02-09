import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { MatSnackBar } from '@angular/material'
import { AuthService } from './auth.service'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

@Injectable()

export class WebService{
	BASE_URL ='http://localhost:63145/api'
	// BASE_URL =

	private messageStore=[
	]
	
	private messageSubject:BehaviorSubject<any[]>


	messages:Observable<any[]>

	constructor(private http: Http, private sb: MatSnackBar, private auth : AuthService ){
		this.messageSubject= <BehaviorSubject<any[]>>new BehaviorSubject([]);
		this.messages = this.messageSubject.asObservable();
		this.getAllMessages()
	}
	getAllMessages(){
		try{
			var response = this.http.get(this.BASE_URL+'/messages').subscribe(response=>{
				this.messageStore=response.json()
				this.messageSubject.next(this.messageStore)
			})
		}catch(error){
			this.handleError("Unable to get messages")
		}
	}
	
	 getMessages(user: string){
		try{
			var user ='/'+ user ;
			var response = this.http.get(this.BASE_URL+'/messages'+user).subscribe(response=>{
				this.messageStore=response.json()
				this.messageSubject.next(this.messageStore)
			})
		}catch(error){
			this.handleError("Unable to get messages")
		}
	}

	postMessage(message){
		try{
			var response= this.http.post(this.BASE_URL+'/message',message).subscribe(response=>{
				this.messageStore.push(response.json())
				this.messageSubject.next(this.messageStore)
			})
	  }catch(error){
	 		this.handleError("Unable to post message")
	  }
	}

	getUser(){
		return this.http.get(this.BASE_URL+ '/users/me' , this.auth.tokenHeader).map(res=>res.json())
	}
	saveUser(userData){
		return this.http.post(this.BASE_URL+ '/users/me' , userData, this.auth.tokenHeader).map(res=>res.json())
	}

  private handleError(error){
		console.error(error);
		this.sb.open(error, "close",{duration:5000})
	}
}
