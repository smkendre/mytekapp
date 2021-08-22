import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationsPageRoutingModule } from './registrations-routing.module';

import { RegistrationsPage } from './registrations.page';
import { ImagePickerComponent } from '../shared/image-picker/image-picker.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationsPageRoutingModule  ],
  declarations: [RegistrationsPage, ImagePickerComponent],
  exports: [ImagePickerComponent]
})
export class RegistrationsPageModule {}
