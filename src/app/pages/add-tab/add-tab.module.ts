import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTabPageRoutingModule } from './add-tab-routing.module';

import { AddTabPage } from './add-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTabPageRoutingModule
  ],
  declarations: [AddTabPage]
})
export class AddTabPageModule {}
