import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { MaterialModule } from '../../modules/material/material.module';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';

@NgModule({
  declarations: [
    WishlistListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
