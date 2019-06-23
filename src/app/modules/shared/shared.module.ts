import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EcoFabSpeedDialModule } from '@ecodev/fab-speed-dial';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SpinnerComponent } from '../../components/spinner/spinner.component';


@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EcoFabSpeedDialModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    EcoFabSpeedDialModule,
    SpinnerComponent
  ],
})
export class SharedModule { }
