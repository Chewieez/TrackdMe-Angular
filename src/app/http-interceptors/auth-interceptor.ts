import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
  public authState: any;
  public authToken: any;
    
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        this.authState = user;

        user.getIdToken(true).then(authToken => {
          this.authToken = authToken;
        });
      }
    });
  }
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.attachAuthHeader(req, next));
  }

  private async attachAuthHeader(req: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    // Get the auth token from the service.

    if (req.method && req.method === "POST") {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      let authToken = "";

      this.afAuth.onAuthStateChanged(user => {
        if (user) {
          user.getIdToken(false).then((token => {
              authToken = token;

              let authReq = req.clone({
                url: req.url + `?auth=${authToken}`
              });
              
              return next.handle(authReq).toPromise();
            }));
          }
        });    
      } else {
        return next.handle(req.clone()).toPromise();
        //authReq = req.clone();
      }
      // send cloned request with header to the next handler.
  }
}
