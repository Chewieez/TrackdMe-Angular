import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model: any = {};

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  signin() {
    this.auth.login(this.model.userEmail, this.model.userPassword);
  }

  signup() {
      this.auth.signup(this.model.userEmail, this.model.userPassword);
  }
}
