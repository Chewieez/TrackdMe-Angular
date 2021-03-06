import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { Observable } from '../../../node_modules/rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const API_URL = "https://bike-component-log.firebaseio.com/bikes";
const CACHE_SIZE = 1; // the number of elements that are cached and replayed for each subscriber

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  public editBikeMode: boolean;
  public bikesCache$: Observable<Array<Bike>>;
  public currentBike: Bike; 
  
  constructor(private _http: HttpClient ) {
    
    this.editBikeMode = false;
  }
  
  getUserBikes(fbUID: string): Observable<Array<Bike>> {
    if (!this.bikesCache$) {
      this.bikesCache$ = this._requestUserBikes(fbUID)
        .pipe(
          shareReplay(CACHE_SIZE) 
        );

      return this.bikesCache$;
    }
  }
  
  private _requestUserBikes(fbUID: string) {
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
