import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatchPassword} from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  noConnection = { noConnection: false};
  authForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ],[this.uniqueUserName.validate]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ])
  },{ validators: [this.matchPassword.validate,] }
  );

  constructor(
    private uniqueUserName: UniqueUsername,
    private matchPassword: MatchPassword,
    private authService: AuthService
    ) {}

  ngOnInit(): void {}
  onSubmit() {
    if(this.authForm.invalid){return}
    else{
     this.authService.signup(this.authForm.value)
     .subscribe({
       next:(response)=>{
         console.log(response);
       },
       error:(error)=>{
         if(error.status === 0){
           this.authForm.setErrors(this.noConnection = { noConnection: true});
           setTimeout(()=>{
             this.noConnection.noConnection = false;
            },5000)
         }
           
        },
       complete:()=>{},
     })
    }
  }
  checkConnection(){
    return this.noConnection.noConnection;
  }
  /** @UserName Input validation *********************************/
  checkRequiredUsername(){
    if(this.authForm.touched && this.authForm.dirty &&
      this.authForm.controls['username'].errors! &&
      this.authForm.controls['username'].touched){
       if(this.authForm.controls['username'].errors!['required']){return true;}
       else {return false};
    }else{
      return false;
    }
  }
  checkMinLength(){
    if(this.authForm.touched && this.authForm.dirty && 
      this.authForm.controls['username'].errors!){
       if(this.authForm.controls['username'].errors!['minlength']){return true;}
       else {return false;};
    }else{
      return false;
    }
  }

  checkPattern(){
    if(this.authForm.touched && this.authForm.dirty && 
      this.authForm.controls['username'].errors!){
      if(this.authForm.controls['username'].errors!['pattern']){
        return true;
      }else{
        return false;
      }
    }else{
      return false
    }
  }
  checkTakenUsername(){
    if(this.authForm.touched && this.authForm.dirty && 
      this.authForm.controls['username'].errors!){

      if(this.authForm.controls['username'].errors!['nonUniqueUsername']){
        return true;
      }else{
        return false;
      }
    }else{
      return false
    }
  }
    /** @Password Input validation *********************************/
  
  checkRequiredPassword(){
    if(this.authForm.controls['password'].touched && this.authForm.dirty && 
    this.authForm.controls['password'].errors!){
      if(this.authForm.controls['password'].errors!['required']){
        return true;
      }else {
        return false};
    }
    else{
      return false
    }
  }
  checkMinLengthPassword(){
    if(this.authForm.touched && this.authForm.dirty && 
      this.authForm.controls['password'].errors!){
      if(this.authForm.controls['password'].errors!['minlength']){
        return true;
      }else {
        return false;
      };
    }else{
      return false
    }
  }

  /** @PassworConfirmation Input validation *********************************/
  checkRequiredPasswordConfirmation(){
    if (this.authForm.controls['passwordConfirmation'].touched &&
      this.authForm.dirty &&
      this.authForm.controls['passwordConfirmation'].errors!) {
       if (this.authForm.controls['passwordConfirmation'].errors!['required']) {return true;} 
       else {return false};
    }
    else {
      return false
    }
  }
  checkMinLengthPasswordConfirmation(){
    if(this.authForm.touched && this.authForm.dirty && 
      this.authForm.controls['passwordConfirmation'].errors!){
      if(this.authForm.controls['passwordConfirmation'].errors!['minlength']){
        return true;
      }else {
        return false;
      }
    }else{
      return false
    }
  }
  checkMaxLengthPasswordConfirmation(){
    if(this.authForm.touched && this.authForm.dirty && 
      this.authForm.controls['passwordConfirmation'].errors!){
      if(this.authForm.controls['passwordConfirmation'].errors!['maxlength']){
        return true;
      }else {
        return false;
      }
    }else{
      return false
    }
  }
  checkPasswordDontMatch(){
    if(
    this.authForm.controls['password'].touched &&
    this.authForm.controls['password'].dirty &&
    this.authForm.controls['passwordConfirmation'].touched &&
    this.authForm.controls['passwordConfirmation'].dirty
    ){
      return this.authForm.controls['passwordConfirmation'].errors ? true : false;  
    }else {
      return false; 
    }
  }
}


