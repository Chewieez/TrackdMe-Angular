import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  model: any = {};

  constructor(public auth: AuthService) { }
      
  signin() {
    this.auth.signin(this.model.userEmail, this.model.userPassword);
  }

  signup() {
      this.auth.signup(this.model.userEmail, this.model.userPassword);
  }
        
}
