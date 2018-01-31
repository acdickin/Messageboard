import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { Router } from '@angular/router'
 
@Injectable()
export class AuthService{
	BASE_URL ='http://localhost:63145/auth'
	NAME_KEY ='name'
	TOKEN_KEY ='token'

	constructor(private http:Http, private router:Router){	}


	get name(){
		return localStorage.getItem(this.NAME_KEY);
	}
	
	get isAuthenticated(){
		return !!localStorage.getItem(this.TOKEN_KEY);
	}
	
	get tokenHeader(){
		var header = new Headers({'Authorization':'Bearer ' + localStorage.getItem(this.TOKEN_KEY)});
		console.log("header",header)
		
		return new RequestOptions({headers:header})
	}


	login(loginData){
		this.http.post(this.BASE_URL +'/login', loginData).subscribe(res =>{
				console.log(res)
				this.authenticate(res)
		})
	}

	register(user){
		delete user.comfirmPassword
		this.http.post(this.BASE_URL +'/register', user).subscribe(res =>{
			this.authenticate(res)
	
		})
	}

	logout(){
		localStorage.removeItem(this.TOKEN_KEY)
		localStorage.removeItem(this.NAME_KEY)
	}

	authenticate(res){
		console.log(res)
		var authResponse =res.json()
		if(!authResponse.token)
			return;
		
		localStorage.setItem(this.TOKEN_KEY, res.json().token)
		localStorage.setItem(this.NAME_KEY, res.json().firstName)
		this.router.navigate[('/')]
	}
}
