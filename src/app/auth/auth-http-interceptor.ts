import { Injectable } from '@angular/core';
import {HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpEventType } from '@angular/common/http';
import { filter, Observable, tap } from 'rxjs'

@Injectable({providedIn: 'root'})
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor() { };
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifyReq = req.clone({
            withCredentials: true,
        });
        return next.handle(modifyReq)
            // .pipe(
            //     filter(v=>v.type===HttpEventType.Sent),
            //     tap(v => {
            //         console.log('Request was sent it');
            //         // if (v.type === HttpEventType.Sent) {
            //         //     console.log('Request was sent it');
            //         // }
            //         // if (v.type === HttpEventType.Response) {
            //         //     console.log('Response received it');
            //         // }
            //     }),
            // )
    }
}
