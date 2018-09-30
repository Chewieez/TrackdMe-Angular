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
  public user: any;
  public bikes: Bike[];
  public currentBike: Bike;

  constructor(private _auth: AuthService, private _bikesService: BikesService) {
    this._auth.user$.subscribe(user => {
      this.user = user;
      this.getUserBikes();
    });
  }
  
  ngOnInit() {
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

  public getCurrentUser() {
    return this._auth.getAuthState().pipe(first());
  }

  public getUserBikes(): void {
    if (this.user) {
      this._bikesService.getUserBikes(this.user.uid).subscribe(data => {
        this.bikes = data;
      });
    }
  }

  public getComponents(): void {
    console.log("Will eventually get the chosen bikes components now.");
  }

  public sendToAddBike(): void {
    console.log("this should send user to add a bike, or open a add-bike modal");
  }


  public signin(): void {
    this._auth.login(this.model.userEmail, this.model.userPassword);
  }

  public signup(): void {
      this._auth.signup(this.model.userEmail, this.model.userPassword);
  }
}
