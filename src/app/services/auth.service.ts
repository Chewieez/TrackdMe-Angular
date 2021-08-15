import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  public authState$: Observable<any>;
  public user$: Observable<any>;


  constructor(public firebaseAuth: AngularFireAuth) {
    this.authState$ = firebaseAuth.authState;
    this.user$ = firebaseAuth.authState;
  }

  getAuthState() {
    return this.authState$;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Account created!', value);
      })
      .catch(err => {
        console.log('Something went wrong creating your account: ', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('You successfully logged in');
      })
      .catch(err => {
        console.log('Something went wrong logging in: ', err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .signOut()
      .then(() => console.log("Successfully logged out"))
      .catch(err => console.log("Something went wrong logging out"));
  }
}