import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilestonesPageRoutingModule } from './milestones-routing.module';

import { MilestonesPage } from './milestones.page';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilestonesPageRoutingModule
  ],
  declarations: [MilestonesPage, HeaderComponent, FooterComponent]
})
export class MilestonesPageModule {}
