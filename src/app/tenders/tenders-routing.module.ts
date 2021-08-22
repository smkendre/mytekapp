import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TendersPage } from './tenders.page';

const routes: Routes = [
  {
    path: '',
    component: TendersPage,


  },
  {
    path: 'milestones',
    loadChildren: () => import('./milestones/milestones.module').then( m => m.MilestonesPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TendersPageRoutingModule {}
