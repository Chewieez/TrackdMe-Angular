import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public emailAddress: string;
  public password: string;

  constructor() { }

  ngOnInit() {
  }

  public logMeIn() {

  }

  public registerUser() {
    // check if email address has already been used (or I may firebase is already doing that)
  }

  public cancel() {

  }
}
