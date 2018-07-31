import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
