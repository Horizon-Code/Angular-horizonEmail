import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';
import { sendEmailResponse } from '../email.service';



@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;
  constructor(
    private emailService: EmailService
  ) {
    this.email= {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${localStorage.key(0)}@angular-email.com`
    }
   }

  ngOnInit(): void {
  }
  onSubmit(event:Email){
    this.emailService.sendEmail(event)
    .subscribe({
      next: (response)=>{this.handlerSuccessEmailSent(response)},
      error: (error)=>{throw new Error(error.message)},
      complete: ()=>{console.log('Email sent successfully')}
    })
  }
  handlerSuccessEmailSent(response:sendEmailResponse){
      console.log(response);
      this.showModal = false;
  }

}
