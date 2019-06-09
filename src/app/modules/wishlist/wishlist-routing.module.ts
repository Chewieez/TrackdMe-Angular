import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistListComponent } from './wishlist-list/wishlist-list.component';

const routes: Routes = [
  {
    path: '',
    component: WishlistListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { 

}
