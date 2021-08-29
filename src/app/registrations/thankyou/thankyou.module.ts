import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThankyouPageRoutingModule } from './thankyou-routing.module';

import { ThankyouPage } from './thankyou.page';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThankyouPageRoutingModule
  ],
  declarations: [ThankyouPage, HeaderComponent, FooterComponent]
})
export class ThankyouPageModule {}
