import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../email';
import { EmailService, sendEmailResponse } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent implements OnInit {

  showModal: boolean = false;
  @Input()
  email!: Email;
  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      text: `Reply:\n\n\n\n----------------
      ${this.email.from} wrote: \n> ${this.email.text}`
     }
  }
  onSubmit(email: Email){
    this.emailService.sendEmail(email)
    .subscribe(response=>console.log(response));
    this.showModal = false;
  }

}



