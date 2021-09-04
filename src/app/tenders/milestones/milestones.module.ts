import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilestonesPageRoutingModule } from './milestones-routing.module';

import { MilestonesPage } from './milestones.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilestonesPageRoutingModule,
    SharedModule
  ],
  declarations: [MilestonesPage]
})
export class MilestonesPageModule {}
