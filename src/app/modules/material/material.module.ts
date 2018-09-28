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
  MatTooltipModule,
  MatSelectModule
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
    MatTooltipModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule, 
    MatButtonModule,
    MatCheckboxModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
