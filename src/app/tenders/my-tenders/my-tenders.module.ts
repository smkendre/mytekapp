import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTendersPageRoutingModule } from './my-tenders-routing.module';

import { MyTendersPage } from './my-tenders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTendersPageRoutingModule
  ],
  declarations: [MyTendersPage]
})
export class MyTendersPageModule {}
