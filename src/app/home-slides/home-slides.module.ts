import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSlidesPageRoutingModule } from './home-slides-routing.module';

import { HomeSlidesPage } from './home-slides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeSlidesPageRoutingModule
  ],
  declarations: [HomeSlidesPage]
})
export class HomeSlidesPageModule {}
