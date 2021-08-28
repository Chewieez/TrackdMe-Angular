import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishlistItem } from '../models/wishlist-item.model';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

// const API_URL = "https://bike-component-log.firebaseio.com/wishes";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public db: AngularFireDatabase;
  
  constructor(private _http: HttpClient, db: AngularFireDatabase) { 
    this.db = db;
  }

  public getUserWishList(fbUID: string): Observable<Array<WishlistItem>> {
    if (fbUID) {
      return this._requestUserWishlist(fbUID);
    }
  }

  private _requestUserWishlist(fbUID: string) {
    return this.db.list('/wishes', ref => ref.orderByChild('userId').equalTo(fbUID))
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
}
