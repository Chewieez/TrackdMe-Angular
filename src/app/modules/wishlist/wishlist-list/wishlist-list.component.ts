import { Component, OnInit, OnDestroy } from '@angular/core';
import { WishlistService } from '../../../services/wishlist.service';
import { WishlistItem } from '../../../models/wishlist-item.model';
import { AuthService } from '../../../services/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit, OnDestroy {
  public progressFlag: boolean = true;
  public wishlist: WishlistItem[];
  public user: User;
  public wishSearch: string;

  constructor(private _auth: AuthService, private _wishlistService: WishlistService) {
    this._auth.user$.subscribe(user => {
      this.user = user;
      this.getUserWishes();
    })
   }

  ngOnInit() {
  }

  public getUserWishes() {
    if (this.user) {
      this._wishlistService.getUserWishList(this.user.uid).subscribe(data => {
        this.wishlist = data;
        this.progressFlag = false;
      })
    }
  }

  ngOnDestroy() {
  }
}
