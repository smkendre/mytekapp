import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialRequestPage } from './material-request.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialRequestPage
  },
  {
    path: 'material-list',
    loadChildren: () => import('./material-list/material-list.module').then( m => m.MaterialListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRequestPageRoutingModule {}
