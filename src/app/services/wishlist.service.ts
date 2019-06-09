import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WishlistItem } from '../models/wishlist-item.model';
import { map } from 'rxjs/operators';

const API_URL = "https://bike-component-log.firebaseio.com/wishes";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _http: HttpClient ) { 

  }

  public getUserWishList(fbUID: string): Observable<Array<WishlistItem>> {
    if (fbUID) {
      return this._requestUserWishlist(fbUID);
    }
  }

  private _requestUserWishlist(fbUID: string) {
    return this._http.get<WishlistItem[]>(`${API_URL}.json?orderBy="userId"&equalTo="${fbUID}"`)
    .pipe(
      map(res => {
        const wishes = res.valueOf();
        return Object.keys(wishes)
        .map(key => wishes[key]);
      }));
  }
}
