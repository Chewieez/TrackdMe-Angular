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
  MatSelectModule,
  MatCardModule,
  MatExpansionModule
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
    MatSelectModule,
    MatCardModule,
    MatExpansionModule
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
    MatSelectModule,
    MatCardModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }
