import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitReportPageRoutingModule } from './submit-report-routing.module';

import { SubmitReportPage } from './submit-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitReportPageRoutingModule
  ],
  declarations: [SubmitReportPage]
})
export class SubmitReportPageModule {}
