import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface UserNameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface SigninCredentials {
  username: string;
  password: string;
}
interface SignupResponse {
  username: string;
}
interface SigninResponse {
  authenticated: boolean;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http:HttpClient) {
  }
  usernameAvailable(username:string) {
    return this.http.post<UserNameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username
      }
      );
    }

    checkAuth(){
      return this.http.get<SigninResponse>(`${this.rootUrl}/auth/signedin`,{
        withCredentials:true
      })
      .pipe(
        tap(({authenticated})=>{
          console.log(authenticated);
          this.signedin$.next(authenticated);
        })
      )
    }
    signup(credentials: SignupCredentials){
      return this.http.post<SignupResponse>(
        `${this.rootUrl}/auth/signup`,
        credentials,{
        withCredentials: true
        }).pipe(
        tap((response)=>{
          console.log(response)
          this.signedin$.next(true);
        })
      )
    }
    signin(credentials: SigninCredentials){
      return this.http.post<any>(`${this.rootUrl}/auth/signin`,credentials)
      .pipe(
        tap((response)=>{
          console.log(response);
          this.signedin$.next(true);
          localStorage.setItem(credentials.username,String(this.signedin$.value));
        })
      )
    }

    signout(){
      return this.http.post(`${this.rootUrl}/auth/signout`,{})
      .pipe(
        tap((response)=>{
          console.log('Signing out',response);
          this.signedin$.next(false);
          localStorage.clear();
          console.log('Signedin$ Value is: ',this.signedin$.value);
          console.log(localStorage);
        })
      )
    }

 

}
