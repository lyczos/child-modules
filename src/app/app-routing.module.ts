import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home-page/home-page.module#HomePageModule',

  },
  {
    path: 'contact',
    loadChildren: './contact-page/contact-page.module#ContactPageModule',

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
