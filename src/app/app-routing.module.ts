import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((mod) => mod.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about.module').then((mod) => mod.AboutModule),
      },
      {
        path: 'packages',
        loadChildren: () =>
          import('./pages/packages/packages.module').then(
            (mod) => mod.PackagesModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact/contact.module').then(
            (mod) => mod.ContactModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
