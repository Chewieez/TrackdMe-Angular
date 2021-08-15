import { Component, OnInit, OnDestroy } from '@angular/core';
import { WishlistService } from '../../../services/wishlist.service';
import { WishlistItem } from '../../../models/wishlist-item.model';
import { AuthService } from '../../../services/auth.service';
import firebase from 'firebase';
import { takeUntil, switchMap, tap, finalize } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit, OnDestroy {
  private _unsubscribe: Subject<void> = new Subject();
  public inProgressFlag: boolean = true;
  public wishlist$: Observable<WishlistItem[]>;
  public user: firebase.User;
  public wishSearch: string;
  public sortSelector: any;
  public sortReverse: boolean = false;

  constructor(private _auth: AuthService, private _wishlistService: WishlistService) {
  }
  
  ngOnInit() {
    this.wishlist$ = this._auth.user$.pipe(
      takeUntil(this._unsubscribe),
      tap(() => this.inProgressFlag = true),
      switchMap(user => this._wishlistService.getUserWishList(user.uid)),
      tap(() => this.inProgressFlag = false)
    )
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  public sendToAddWish() {
    console.log("send user to add a wish page or modal");
  }

  public setSortOrder(sortSelector: any) {
    // TODO: finish this function
  }
}
