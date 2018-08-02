import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { AuthService } from './auth.service';
import { Observable, BehaviorSubject } from '../../../node_modules/rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_URL = "https://bike-component-log.firebaseio.com/bikes";
const CACHE_SIZE = 1; // the number of elements that are cached and replayed for each subscriber
const tempUID = "vNNMaqgXGFXgbEnb8T6wftVozHt2";

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  editBikeMode: boolean;
  userId: string;
  bikesCache$: Observable<Object>;
  currentBike: Bike; 
  
  
  constructor( public auth: AuthService, private http: HttpClient ) {
    
    this.editBikeMode = false;
  }
  
  getUserBikes(fbUID: string) {
    if (!this.bikesCache$) {
      this.bikesCache$ = this.requestUserBikes(fbUID)
        .pipe(
          shareReplay(CACHE_SIZE) 
        );

      return this.bikesCache$;
    }
  }
  
  private requestUserBikes(fbUID: string ) {
    return this.http.get<Bike[]>(`${API_URL}/.json?orderBy="userId"&equalTo="${fbUID}"`)
    .pipe(
      map(res => { 
        const bikes = res.valueOf();
        return Object.keys(bikes)
        .map(key => bikes[key]);
      }));
  }
}
