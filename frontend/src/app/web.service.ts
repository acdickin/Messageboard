import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Rx'
import { MatSnackBar } from '@angular/material'
@Injectable()

export class WebService{
	BASE_URL ='http://localhost:63145/api'

	private messageStore=[
		{user:'andrew',text:'Its working'},
		{user:'user1',text:'It is working'},
		{user:'user2',text:'Message3'}
	]
	private messageSubject = new Subject();

	messages=this.messageSubject.asObservable();

	constructor(private http: Http, private sb: MatSnackBar ){
		this.getMessages(null)
	}

	 getMessages(user){
		try{
			user =(user!=null)? '/'+ user :"";
			var response = this.http.get(this.BASE_URL+'/messages'+user).subscribe(response=>{
				this.messages=response.json()
				this.messageSubject.next(this.messageStore)
			})
		}catch(error){
			this.handleError("Unable to get messages")
		}
	}

	async postMessage(message){
		try{
			var response= await this.http.post(this.BASE_URL+'/message', message).toPromise()
			this.messageStore.push(response.json())
			this.messageSubject.next(this.messageStore)
	  }catch(error){
	 		this.handleError("Unable to post message")
	  }
	}
  private handleError(error){
		console.error(error);
		this.sb.open(error, "close",{duration:5000})
	}
}
