import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationsPageRoutingModule } from './registrations-routing.module';

import { RegistrationsPage } from './registrations.page';
import { ImagePickerComponent } from '../shared/image-picker/image-picker.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationsPageRoutingModule  ],
  declarations: [RegistrationsPage, ImagePickerComponent, HeaderComponent, FooterComponent],
  exports: [ImagePickerComponent]
})
export class RegistrationsPageModule {}
