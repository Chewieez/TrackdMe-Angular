import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { MaterialModule } from '../../modules/material/material.module';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';
// import { SpinnerComponent } from '../../components/spinner/spinner.component';

@NgModule({
  declarations: [
    WishlistListComponent,
    // SpinnerComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    MaterialModule
  ]
})
export class WishlistModule { }
