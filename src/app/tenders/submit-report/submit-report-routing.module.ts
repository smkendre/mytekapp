import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitReportPage } from './submit-report.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitReportPageRoutingModule {}
