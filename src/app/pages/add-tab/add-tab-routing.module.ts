import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTabPage } from './add-tab.page';

const routes: Routes = [
  {
    path: '',
    component: AddTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTabPageRoutingModule {}
