import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendPicPage } from './send-pic.page';

const routes: Routes = [
  {
    path: '',
    component: SendPicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendPicPageRoutingModule {}
