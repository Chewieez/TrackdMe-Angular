import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BikesService } from '../../services/bikes.service';
import { Bike } from '../../models/bike.model';
import { first, tap } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  model: any = {};
  bikes: any;
  currentUser: any;

  constructor(public auth: AuthService, private bikesService: BikesService) {
  }
  
  getCurrentUser() {
    return this.auth.getAuthState().pipe(first());
  }

  getUserBikes() {
    
    if (this.currentUser) {
      this.bikesService.getUserBikes(this.currentUser.uid).subscribe(data => {
        this.bikes = data;
      });
    }
  }

  ngOnInit() {

    this.getCurrentUser().pipe(
      tap(user => {
        if (user) {
          this.currentUser = user;
          
          this.getUserBikes();
        } else {
          this.currentUser = null;
        }
      })
    )
    .subscribe();

    
    /**
     * Test code to get POST api call working
     */
    // const bikeToAdd = new Bike();
    // bikeToAdd.brandName = "testInterceptor";
    // bikeToAdd.mileage = 2000;

    // this.bikesService.addBike(bikeToAdd).subscribe((response: any) => {

    //   console.log("response from addBike call in component: ", response);
    // });
  }

  signin() {
    this.auth.login(this.model.userEmail, this.model.userPassword);
  }

  signup() {
      this.auth.signup(this.model.userEmail, this.model.userPassword);
  }
}
