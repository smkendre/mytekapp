import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { IndexGuard } from './guards/index.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [IndexGuard],
    loadChildren: () => import('./home-slides/home-slides.module').then( m => m.HomeSlidesPageModule),

     //redirectTo: 'home-slides',


  },

  {
    path: 'auth',
    canActivate: [IndexGuard],

    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule),

  },
  {
    path: 'tenders',
    loadChildren: () => import('./tenders/tenders.module').then( m => m.TendersPageModule),
    // canActivate: [AuthGuard]

  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    // canActivate: [AuthGuard]

  },
  {
    path: 'my-tenders',
    loadChildren:  () => import('./tenders/my-tenders/my-tenders.module').then( m => m.MyTendersPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'submit-report/:tenderId',
    loadChildren: () => import('./tenders/submit-report/submit-report.module').then( m => m.SubmitReportPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'milestones/:tenderId',
    loadChildren: () => import('./tenders/milestones/milestones.module').then( m => m.MilestonesPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'thankyou',
    loadChildren: () => import('./thankyou/thankyou.module').then( m => m.ThankyouPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'registration',
    loadChildren: () => import('./registrations/registrations.module').then( m => m.RegistrationsPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'registration-thankyou',
    loadChildren: () => import('./registrations/thankyou/thankyou.module').then( m => m.ThankyouPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'material-request',
    loadChildren: () => import('./material-request/material-request.module').then( m => m.MaterialRequestPageModule),
    // canActivate: [AuthGuard]

  },

  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule),
    // canActivate: [AuthGuard]

  },

  {
    path: 'material-request-list',
    loadChildren: () => import('./material-request/material-list/material-list.module').then( m => m.MaterialListPageModule),
    // canActivate: [AuthGuard]

  },
  {
    path: 'home-slides',
    loadChildren: () => import('./home-slides/home-slides.module').then( m => m.HomeSlidesPageModule),
    // canActivate: [AuthGuard]

  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule),
    // canActivate: [AuthGuard]

  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule),
    // canActivate: [AuthGuard]

  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
