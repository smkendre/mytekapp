import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialRequestPageRoutingModule } from './material-request-routing.module';

import { MaterialRequestPage } from './material-request.page';import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialRequestPageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [MaterialRequestPage]
})
export class MaterialRequestPageModule {}
