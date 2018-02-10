import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions } from '@angular/http'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material'

@Injectable()
export class AuthService{
	//BASE_URL ='http://localhost:63145/auth'
	BASE_URL="https://messageboardapi.herokuapp.com/auth"
	NAME_KEY ='name'
	TOKEN_KEY ='token'

	constructor(private http:Http, private router:Router,  private sb: MatSnackBar,){	}


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
		try{
			this.http.post(this.BASE_URL +'/login', loginData).subscribe(res =>{
				this.authenticate(res)
			})
		}
		catch{
			this.handleError("User and Password do not match")
		}
	}

	register(user){
		try{
			delete user.comfirmPassword
			this.http.post(this.BASE_URL +'/register', user).subscribe(res =>{
				this.authenticate(res)
			})
		}
		catch{
			this.handleError("This user already exists")
		}
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
	private handleError(error){
		console.error(error);
		this.sb.open(error, "close",{duration:5000})
	}

}

