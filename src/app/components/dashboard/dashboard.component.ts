import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BikesService } from '../../services/bikes.service';
import { Bike } from '../../models/bike.model';
import { mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { ComponentService } from '../../services/component.service';
import { BikeComponent } from '../../models/bike-component.model';
import { Observable, Subscription, Subject } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
  model: any = {};
  private _unsubscribe: Subject<void> = new Subject();
  public user: any;
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
    // TODO: convert this to use switchMap instead of a nested .subscribe()
    // this._auth.user$.subscribe(user => {
    //   this.user = user;
    //   this.getUserBikes();
    // });
    this.userBikes$ = this._auth.user$.pipe(
      takeUntil(this._unsubscribe),
      switchMap((user:any) => {
        if (user) {
          this.user = user;
          return this._bikesService.getUserBikes(user.uid);
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

  // public getCurrentUser() {
  //   return this._auth.getAuthState().pipe(first());
  // }

  // public getUserBikes(): void {
  //   if (this.user) {
  //     this._bikesService.getUserBikes(this.user.uid).subscribe(data => {
  //       this.bikes = data;
  //       this.progressFlag = false;
  //     });
  //   }
  // }


  public getComponents(currentBikeId: string): void {
    if (this.user) {
      this.componentSubscription = this._componentService.getBikeComponents(this.user.uid, currentBikeId)
        .pipe(
          takeUntil(this._unsubscribe)
        )
        .subscribe(data => {
          this.components = data.filter(comp => comp.active);
          this.filteredComponents = this.components;
          console.log("retrieved components.");
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

  public signin(): void {
    this._auth.login(this.model.userEmail, this.model.userPassword);
  }

  public signup(): void {
      this._auth.signup(this.model.userEmail, this.model.userPassword);
  }

  public actionX() {

  }

  public action1() {
    
  }

  public action2() {
    
  }

  public action3() {
    
  }
}
