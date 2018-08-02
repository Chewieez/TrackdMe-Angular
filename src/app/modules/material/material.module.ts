import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatButtonModule, 
  MatCheckboxModule, 
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [
    MatToolbarModule, 
    MatButtonModule,
    MatCheckboxModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule { }
