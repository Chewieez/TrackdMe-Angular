import { Injectable } from '@angular/core';
import { Bike } from '../models/bike.model';
import { Observable } from '../../../node_modules/rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';

const API_URL = "https://bike-component-log.firebaseio.com/bikes";
const CACHE_SIZE = 1; // the number of elements that are cached and replayed for each subscriber

@Injectable({
  providedIn: 'root'
})
export class BikesService {
  public editBikeMode: boolean;
  public bikesCache$: Observable<Array<Bike>>;
  public currentBike: Bike; 
  public db: AngularFireDatabase;
  
  constructor(private _http: HttpClient, db: AngularFireDatabase ) {
    this.db = db;
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
    return this.db.list('/bikes', ref => ref.orderByChild('userId').equalTo(fbUID))
      .valueChanges()
      .pipe(
        map(res => { 
          if (res) {
            // reshape the returned object
            const bikes = res.valueOf();
            return Object.keys(bikes)
             .map(key => bikes[key]);
          }
        }));
  }

  addBike(bikeToAdd: Bike): Observable<any> {
    return this._http.post<Bike>(`${API_URL}.json`, bikeToAdd);
  }
}
