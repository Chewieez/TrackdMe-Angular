import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { AuthService } from './auth.service';
import { Observable, BehaviorSubject, throwError } from '../../../node_modules/rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_URL = "https://bike-component-log.firebaseio.com/bikes";
const CACHE_SIZE = 1; // the number of elements that are cached and replayed for each subscriber

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  editBikeMode: boolean;
  currentUser: any = null;
  bikesCache$: Observable<Object>;
  currentBike: Bike; 
  
  
  constructor( public auth: AuthService, private http: HttpClient ) {
    
    this.editBikeMode = false;
    //this.auth.getAuthState().subscribe(user => this.currentUser = user);
  }
  
  getUserBikes(fbUID) {
    if (!this.bikesCache$) {
      this.bikesCache$ = this.requestUserBikes(fbUID)
        .pipe(
          shareReplay(CACHE_SIZE) 
        );

      return this.bikesCache$;
    }
  }
  
  private requestUserBikes(fbUID) {
    return this.http.get<Bike[]>(`${API_URL}.json?orderBy="userId"&equalTo="${fbUID}"`)
    .pipe(
      map(res => { 
        const bikes = res.valueOf();
        return Object.keys(bikes)
        .map(key => bikes[key]);
      }));
  }

  addBike(bikeToAdd: Bike): Observable<any> {
    return this.http.post<Bike>(`${API_URL}.json`, bikeToAdd);
  }
}
