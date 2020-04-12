import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { TakePicPageRoutingModule } from './take-pic-routing.module';

import { TakePicPage } from './take-pic.page';
import { SendPicPage } from '../send-pic/send-pic.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TakePicPageRoutingModule
  ],
  declarations: [TakePicPage, SendPicPage],
  entryComponents: [SendPicPage],
  providers: [Camera]
})
export class TakePicPageModule {}
