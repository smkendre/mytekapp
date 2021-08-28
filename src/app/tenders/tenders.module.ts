import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { TendersPageRoutingModule } from './tenders-routing.module';

import { TendersPage } from './tenders.page';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    TendersPageRoutingModule
  ],
  declarations: [TendersPage, HeaderComponent, FooterComponent]
})
export class TendersPageModule {}
