import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTabPageRoutingModule } from './home-tab-routing.module';

import { HomeTabPage } from './home-tab.page';
import { TakePicPage } from '../take-pic/take-pic.page';
import { SendPicPage } from '../send-pic/send-pic.page';
import { SendPicPageModule } from '../send-pic/send-pic.module';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ShowMapPage } from '../show-map/show-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTabPageRoutingModule,
    SendPicPageModule
  ],
  declarations: [HomeTabPage, TakePicPage, ShowMapPage],
  entryComponents: [TakePicPage, SendPicPage, ShowMapPage],
  providers: [Camera, AngularFireDatabase, AngularFireAuth]
})
export class HomeTabPageModule {}
