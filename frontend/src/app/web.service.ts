import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise'
import { Injectable } from '@angular/core'

@Injectable()

export class WebService{
	BASE_URL ='http://localhost:63145/api'
	constructor(private http: Http){}
	getMessages(){
		return this.http.get(this.BASE_URL+'/messages').toPromise()
	}
	postMessage(message){
		message=JSON.stringify(message)
		console.log(message)
		return this.http.post(this.BASE_URL+'/message', message).toPromise()
	.then(
				res=>{
					console.log(res);
				},
				err=>{
					console.log("error occured",err)
				}
		)
	}
}
