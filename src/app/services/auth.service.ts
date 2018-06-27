import { AngularFireLiteAuth } from 'angularfire-lite';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
    public name: string;
    public email: string;
    public photoUrl: string;
    public emailVer: boolean;
    public uid: string;

    constructor(public auth: AngularFireLiteAuth) { }
    
    public signin( email: string, password: string ) {
        this.auth.signin(email, password);
    }
    
    signup(email: string, password: string) {
        this.auth.signup(email, password);
    }

    signout() {
        this.auth.signout();
    }

    // returns user id if signed in otherwise null
    getUid() {
        return this.auth.uid().subscribe((uid) => uid)
    }

    // returns true if signed in
    authState() {
        return this.auth.isAuthenticated()
            .subscribe((state) => state)
    }

    getCurrentUser() {
        this.auth.currentUser()
            .subscribe((user) => {
                if (user != null) {
                    this.name = user.displayName;
                    this.email = user.email;
                    this.photoUrl = user.photoURL;
                    this.emailVer = user.emailVerified;
                    this.uid = user.uid;
                }
            })
    }

    updateProfile( data: { displayName: string | null, photoURL: string | null} ) {
        this.auth.updateProfile(data);
    }

    updateEmail( email: string ) {
        this.auth.updateEmail(email);
    }

    updatePassword( password: string ) {
        this.auth.updatePassword(password);
    }

    verifyPassResetCode( resetCode: string ) {
        this.auth.verifyPasswordResetCode(resetCode);
    }

    confirmPasswordReset ( resetCode: string, password: string ) {
        this.auth.confirmPasswordReset(resetCode, password);
    }

    relogin( credentials: { providerId: string }) {
        this.auth.relogin(credentials);
    }

    delete() {
        this.auth.deletePermanently();
    }

    sendEmailVerification() {
        this.auth.sendEmailVerification();
    }

    sendPasswordResetEmails(email: string ) {
        this.auth.sendPasswordResetEmail(email);
    }

}