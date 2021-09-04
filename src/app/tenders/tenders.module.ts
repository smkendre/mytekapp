import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TendersPageRoutingModule } from './tenders-routing.module';

import { TendersPage } from './tenders.page';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    TendersPageRoutingModule, SharedModule
  ],
  declarations: [TendersPage, FooterComponent]
})
export class TendersPageModule {}
