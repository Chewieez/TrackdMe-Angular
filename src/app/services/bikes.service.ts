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
  public editBikeMode: boolean;
  public user: any;
  public bikesCache$: Observable<Array<Bike>>;
  public currentBike: Bike; 
  
  constructor( private _auth: AuthService, private _http: HttpClient ) {
    
    this.editBikeMode = false;
    // this._auth.getAuthState().subscribe(user => this.currentUser = user);
  }
  
  getUserBikes(fbUID): Observable<Array<Bike>> {
    if (!this.bikesCache$) {
      this.bikesCache$ = this._requestUserBikes(fbUID)
        .pipe(
          shareReplay(CACHE_SIZE) 
        );

      return this.bikesCache$;
    }
  }
  
  private _requestUserBikes(fbUID) {
    return this._http.get<Bike[]>(`${API_URL}.json?orderBy="userId"&equalTo="${fbUID}"`)
    .pipe(
      map(res => { 
        const bikes = res.valueOf();
        return Object.keys(bikes)
        .map(key => bikes[key]);
      }));
  }

  addBike(bikeToAdd: Bike): Observable<any> {
    return this._http.post<Bike>(`${API_URL}.json`, bikeToAdd);
  }
}
