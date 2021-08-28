import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTendersPageRoutingModule } from './my-tenders-routing.module';

import { MyTendersPage } from './my-tenders.page';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTendersPageRoutingModule
  ],
  declarations: [MyTendersPage, HeaderComponent, FooterComponent]
})
export class MyTendersPageModule {}
