import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'
@Injectable()

export class WebService{
	BASE_URL ='http://localhost:63145/api'
  messages=[]

	constructor(private http: Http, private sb: MatSnackBar ){
		this.getMessages()
	}

	async getMessages(){
		try{
			var response = await this.http.get(this.BASE_URL+'/messages').toPromise()
			this.messages=response.json()
		}catch(error){
			this.handleError("Unable to get messages")
		}
		
		console.log(this.messages)
	}
	
	async postMessage(message){
		try{
			var response= await this.http.post(this.BASE_URL+'/message', message).toPromise()
		  response=response.json()
		  this.messages.push(response)
	  }catch(error){
	 		this.handleError("Unable to post message")
	  }
	}
  private handleError(error){
		console.error(error);
		this.sb.open(error, "close",{duration:5000})
	}
}

