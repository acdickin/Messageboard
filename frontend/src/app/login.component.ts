import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'login',
  template: `
  	<mat-card>
      <form (ngSubmit)="login()">
        <mat-form-field >
          <input style="width:350px" [(ngModel)]="loginData.email" type='email' matInput placeholder="Email" [ngModelOptions]="{standalone: true}" >
        </mat-form-field >
        <mat-form-field >
          <input style="width:350px" [(ngModel)]="loginData.password" type='password' matInput placeholder="Password" [ngModelOptions]="{standalone: true}" >
        </mat-form-field >
        
        <button mat-raised-button color="primary">Login</button>
      </form>
    </mat-card>

  `,
})
export class LoginComponent {
  constructor(private auth: AuthService){}
  loginData={
    "email":'',
    "password":''
  }
  login(){
    this.auth.login(this.loginData)
  }
} 