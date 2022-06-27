import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup;
  @Input()
  email!: Email;
  @Output()
  emailSubmit: EventEmitter<Email> = new EventEmitter;
  
  constructor() { }

  ngOnInit(): void {
    //console.log('EMAIL FORM');
    const { subject, from, to, text } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to,[Validators.required, Validators.email]),
      from: new FormControl({value:from,disabled:true}),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    })
  }
  formPropertyGetters(prop:string){
    //console.log('EMAIL FORM GETTERS FUNCTION'+prop,this.emailForm.get(prop));
    return this.emailForm.get(prop) as FormControl;
  }
  onSubmit(){
    if(this.emailForm.invalid){
      return;
    }else{
      return this.emailSubmit.emit(this.emailForm.value)
    }
  }

}
