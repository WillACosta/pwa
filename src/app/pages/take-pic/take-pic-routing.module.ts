import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakePicPage } from './take-pic.page';

const routes: Routes = [
  {
    path: '',
    component: TakePicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakePicPageRoutingModule {}
