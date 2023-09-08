import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearVehiculoPageRoutingModule } from './crear-vehiculo-routing.module';

import { CrearVehiculoPage } from './crear-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearVehiculoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearVehiculoPage]
})
export class CrearVehiculoPageModule {}
