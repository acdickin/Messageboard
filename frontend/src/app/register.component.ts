import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'resgister',
  templateUrl:'register.component.html',
  styles:[ `
    .error{ background-color:#fff0f0}

  `]
})

export class RegisterComponent {
  form;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router){
    this.form = fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required, emailValid()]],
      password:['',Validators.required],
      comfirmPassword:['',Validators.required]
    },{validator:matchingFields('password','comfirmPassword')})
  }

  onSubmit(){
    this.auth.register(this.form.value)
    this.router.navigate(['/'])
  }
  isValid(control){
    return this.form.controls[control].invalid && this.form.controls[control].touched
   
  }
}
function matchingFields(field1, field2){
  return form =>{
    if(form.controls[field1].value!== form.controls[field2].value)
      return {mismatchedFields:true}
  }
}
function emailValid(){
  return control =>{
    var regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(control.value) ? null : {invalidEmail:true}
  }
}