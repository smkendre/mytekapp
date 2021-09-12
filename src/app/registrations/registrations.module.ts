import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationsPageRoutingModule } from './registrations-routing.module';

import { RegistrationsPage } from './registrations.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationsPageRoutingModule,
  SharedModule,
  ReactiveFormsModule
  ],
  declarations: [RegistrationsPage],
  exports: []
})
export class RegistrationsPageModule {}
