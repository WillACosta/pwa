import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileTabPageRoutingModule } from './profile-tab-routing.module';

import { ProfileTabPage } from './profile-tab.page';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTabPageRoutingModule
  ],
  declarations: [ProfileTabPage],
  providers: [AngularFireAuth]
})
export class ProfileTabPageModule {}
