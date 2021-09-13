import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTendersPageRoutingModule } from './my-tenders-routing.module';

import { MyTendersPage } from './my-tenders.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTendersPageRoutingModule,
    SharedModule
  ],
  declarations: [MyTendersPage]
})
export class MyTendersPageModule {}
