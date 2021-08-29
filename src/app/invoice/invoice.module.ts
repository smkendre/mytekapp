import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicePageRoutingModule } from './invoice-routing.module';

import { InvoicePage } from './invoice.page';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicePageRoutingModule
  ],
  declarations: [InvoicePage, HeaderComponent, FooterComponent]
})
export class InvoicePageModule {}
