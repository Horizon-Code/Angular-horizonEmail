import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ],[]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
});
  constructor(private authService: AuthService,private router: Router) { }
//
  ngOnInit(): void {
  }
  onSubmitSignin(){
    if(this.authForm.invalid) return;
    this.authService.signin(this.authForm.value)
    .subscribe({
      next: (response)=>{
       this.router.navigateByUrl('/inbox');
       console.log(this.authForm,response)
      },
      error: (error)=>{
         this.authForm.setErrors(error.error)
         console.log(error.error);
         console.log(this.authForm);
      },
      complete: ()=>{
        console.log('Signin Response Completed')
      }
    });
  }
  /** @UserName Input validation *********************************/
  checkRequiredUsername() {
    if (this.authForm.touched && this.authForm.dirty &&
      this.authForm.controls['username'].errors! &&
      this.authForm.controls['username'].touched) {
      if (this.authForm.controls['username'].errors!['required']) { return true; }
      else { return false };
    } else {
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
  checkMaxLengthPasswordConfirmation(){
    if(this.authForm.touched && this.authForm.dirty && 
      this.authForm.controls['password'].errors!){
      if(this.authForm.controls['password'].errors!['maxlength']){
        return true;
      }else {
        return false;
      }
    }else{
      return false
    }
  }


}
