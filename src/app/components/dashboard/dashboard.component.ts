import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BikesService } from '../../services/bikes.service';
import { Bike } from '../../models/bike.model';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ComponentService } from '../../services/component.service';
import { BikeComponent } from '../../models/bike-component.model';
import { Observable, Subject, EMPTY } from 'rxjs';
import { User } from 'firebase';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
  model: any = {};
  private _unsubscribe: Subject<void> = new Subject();
  public user: User;
  public userBikes$: Observable<Bike[]>;
  public bikes: Bike[];
  public currentBike: Bike;
  public components: BikeComponent[];
  public filteredComponents: BikeComponent[];
  public componentSearch: string;
  public sort: any;
  public isSortReverse = false;
  public showActiveComponents = true;
  public progressFlag = true;

  constructor(private _auth: AuthService, private _bikesService: BikesService, private _componentService: ComponentService) {
  }
  
  ngOnInit() {
    this.userBikes$ = this._auth.user$.pipe(
      takeUntil(this._unsubscribe),
      switchMap((user:any) => {
        if (user) {
          this.user = user;
          return this._bikesService.getUserBikes(user.uid);
        } else {
          return EMPTY
        }
      })
    )
  
    this.userBikes$.subscribe(data => {
      this.bikes = data;
      this.progressFlag = false;
    });
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

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  public getComponents(currentBikeId: string): void {
    if (this.user) {
      this._componentService.getBikeComponents(this.user.uid, currentBikeId)
        .pipe(
          takeUntil(this._unsubscribe)
        )
        .subscribe(data => {
          this.components = data.filter(comp => comp.active);
          this.filteredComponents = this.components;
        });
    }
  }

  public sendToAddBike(): void {
    console.log("this should send user to add a bike, or open a add-bike modal");
  }

  public changeCompActiveState(comp) {
    console.log("Send the change to server");
  }

  public sendToAddComponent() {
    console.log("add component to database")
  }

  public filterComponents(showActive: boolean) {
    if (showActive) {
      this.filteredComponents = this.components.filter(comp => comp.active);
    } else {
      this.filteredComponents = this.components.filter(comp => !comp.active);
    }
  }
  
  public sendToImportBike() {
    console.log("go to strava to import a bike")
  }

  public signin(): void {
    this._auth.login(this.model.userEmail, this.model.userPassword);
  }

  public signup(): void {
      this._auth.signup(this.model.userEmail, this.model.userPassword);
  }

  public refresh() {
    // TODO: add logic to refresh view
  }
}
