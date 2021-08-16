import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTendersPage } from './my-tenders.page';

const routes: Routes = [
  {
    path: '',
    component: MyTendersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTendersPageRoutingModule {}
