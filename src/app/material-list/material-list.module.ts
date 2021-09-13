import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialListPageRoutingModule } from './material-list-routing.module';

import { MaterialListPage } from './material-list.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialListPageRoutingModule,
    SharedModule
  ],
  declarations: [MaterialListPage]
})
export class MaterialListPageModule {}
