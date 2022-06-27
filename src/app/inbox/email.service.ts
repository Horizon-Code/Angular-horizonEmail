import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email} from './email';

export interface ResponseGetEmails{
  id: string;
  subject: string;
  from: string;
}

export interface sendEmailResponse {
  status: string;
}



@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com'

  constructor(private http: HttpClient) { }

  getEmails(){
    return this.http.get<ResponseGetEmails[]>(`${this.rootUrl}/emails`);
  }
  getEmail(id: string){
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`);	
  }
  sendEmail(email: Email){
    return this.http.post<sendEmailResponse>(`${this.rootUrl}/emails`,email)
  }

}
