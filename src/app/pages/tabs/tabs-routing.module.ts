import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'homeTab',
        loadChildren: ()=> 
        import('../home-tab/home-tab.module').then(m => m.HomeTabPageModule)
      },
      {
        path: 'profileTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profile-tab/profile-tab.module').then(m => m.ProfileTabPageModule)
          }
        ]
      },
      {
        path: 'addTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../add-tab/add-tab.module').then(m => m.AddTabPageModule)
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/tabs/homeTab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/homeTab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
