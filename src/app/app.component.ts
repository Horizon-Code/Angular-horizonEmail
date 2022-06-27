import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedin$!: BehaviorSubject<boolean>;

  constructor(private authService: AuthService,private router: Router){
    this.signedin$ = this.authService.signedin$;
  }
  ngOnInit() {
     this.userSessionController();    
  }
   isSignedIn(){
    return this.signedin$.value===true ? true : false;
   }
   isNotSignedIn(){
    return this.signedin$.value===false ? true : false;	
   }
   userSessionController(){
    let url = location.href;
    let inbox =url.split('/')[3];
    console.log("%c" + 'SESSION STORAGE LENGTH: '+ sessionStorage.length, "color: PowderBlue;font-weight:bold; background-color: RoyalBlue;")
    console.log(url);
    if(localStorage.length > 0){
      this.signedin$.next(true);
      if (inbox !== 'inbox') {
        console.log('Sending user to inbox from userSessionController');
        this.router.navigate(['/inbox']);
      }
      const userKey:string|null = localStorage.key(0) || 'No user in localStorage';
      return console.log(localStorage);
    }else{
      return false;
    }
   }
}
