import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BikesService } from '../../services/bikes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  model: any = {};
  bikes: any;
  constructor(private auth: AuthService, private bikeService: BikesService) { }

  ngAfterViewInit() {
    this.bikeService.getUserBikes("insert firebase UID here").subscribe(data => {
      this.bikes = data;
      console.log("bikes: ", this.bikes);
    });

    let x = 1;
  }

  signin() {
    this.auth.login(this.model.userEmail, this.model.userPassword);
  }

  signup() {
      this.auth.signup(this.model.userEmail, this.model.userPassword);
  }
}
