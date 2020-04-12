import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendPicPageRoutingModule } from './send-pic-routing.module';

import { SendPicPage } from './send-pic.page';
import { AngularFireDatabase } from '@angular/fire/database';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendPicPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SendPicPage],
  providers: [AngularFireDatabase]
})
export class SendPicPageModule {}
