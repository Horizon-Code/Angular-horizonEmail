import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmailService } from '../email.service';
import { Email} from '../email';
import { Observable, ObservableInput, switchMap } from 'rxjs';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email!: Email;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService,
    ) { 
        this.email=this.route.snapshot.data['email']
        this.route.data.subscribe(({email}) =>{
          this.email = email;
          console.log('show component',this.email);
        })
      }

  ngOnInit(): void {
    // this.route.params.pipe(
    //   switchMap(({id}) => { 
    //     return this.emailService.getEmail(id)
    //   })
    //   ).subscribe(response=>{
    //     this.email = response;
    //   })
  }


}
