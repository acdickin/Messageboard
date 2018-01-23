import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Injectable } from '@angular/core'

@Injectable()

export class WebService{
	BASE_URL ='http://localhost:63145/api'
  messages=[]

	constructor(private http: Http){
		this.getMessages()
	}

	async getMessages(){
		var response = await this.http.get(this.BASE_URL+'/messages').toPromise()
		this.messages=response.json();
		console.log(this.messages)
	}
	
	postMessage(message){

		return this.http.post(this.BASE_URL+'/message', message).toPromise()
  }
}
