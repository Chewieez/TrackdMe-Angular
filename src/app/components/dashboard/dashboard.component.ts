import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BikesService } from '../../services/bikes.service';
import { Bike } from '../../models/bike.model';
import { first } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  model: any = {};
  bikes: any;
  currentUser: any = null;

  constructor(public auth: AuthService, private bikesService: BikesService) {
  }
  
  getCurrentUser() {
    return this.auth.getAuthState().pipe(first()).toPromise();
  }

  async getUserBikes() {
    this.currentUser = await this.getCurrentUser();

    if (this.currentUser) {
      this.bikesService.getUserBikes(this.currentUser.uid).subscribe(data => {
        this.bikes = data;
      });
    }
  }

  ngOnInit() {
    
    this.getUserBikes();
    // if (this.currentUser) {
      
    // }

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
