import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { ResponseGetEmails } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {
   emails:ResponseGetEmails[] = [];

  constructor(private emailService:EmailService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((response) => {
      this.emails = response;
      console.log(this.emails);
  })

 }
}
