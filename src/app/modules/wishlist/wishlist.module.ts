import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { WishlistRoutingModule } from './wishlist-routing.module';

import { WishlistListComponent } from './wishlist-list/wishlist-list.component';

@NgModule({
  declarations: [
    WishlistListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
