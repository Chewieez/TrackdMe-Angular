import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from '@firebase/app';

import { Observable } from 'rxjs';
import { FirebaseAuth } from 'angularfire2';
;


@Injectable()

export class AuthService {
    user: Observable<any>;

    constructor(public firebaseAuth: AngularFireAuth) {
        this.user = firebaseAuth.authState;
     }

    signup(email: string, password: string) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Account created!' , value);
            })
            .catch(err => {
                console.log('Something went wrong creating your account: ', err.message);
            });
    }

    login(email: string, password: string) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                console.log('You successfully logged in');
            })
            .catch( err => {
                console.log('Something went wrong logging in: ', err.message);
            });
    }
    
    logout() {
        this.firebaseAuth
            .auth
            .signOut()
            .then( () => console.log("Successfully logged out"))
            .catch ( err => console.log("Something went wrong logging out"));
    }
}