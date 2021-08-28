import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialRequestPageRoutingModule } from './material-request-routing.module';

import { MaterialRequestPage } from './material-request.page';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialRequestPageRoutingModule
  ],
  declarations: [MaterialRequestPage, HeaderComponent, FooterComponent]
})
export class MaterialRequestPageModule {}
