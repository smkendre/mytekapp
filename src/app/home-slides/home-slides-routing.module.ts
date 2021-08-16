import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSlidesPage } from './home-slides.page';

const routes: Routes = [
  {
    path: '',
    component: HomeSlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeSlidesPageRoutingModule {}
