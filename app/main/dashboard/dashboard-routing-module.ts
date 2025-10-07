import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1 } from './page1/page1';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'com1' },

  {
    path: 'com1', component: Page1
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
