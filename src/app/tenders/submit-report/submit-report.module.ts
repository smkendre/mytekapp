import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitReportPageRoutingModule } from './submit-report-routing.module';

import { SubmitReportPage } from './submit-report.page';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitReportPageRoutingModule
  ],
  declarations: [SubmitReportPage, HeaderComponent, FooterComponent]
})
export class SubmitReportPageModule {}
