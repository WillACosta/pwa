import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SendPicPage } from '../send-pic/send-pic.page';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-take-pic',
  templateUrl: './take-pic.page.html',
  styleUrls: ['./take-pic.page.scss'],
})
export class TakePicPage implements OnInit {

  imagem: any = null;
  videoTracks: any;

  constructor(public modalctr: ModalController, private camera: Camera, private sn: DomSanitizer) { }

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalctr.dismiss({
      'dismissed': true
    });
  }

  /* // Capturar fotografia com mediaDevices
  ionViewDidEnter() {
    const video = <any>document.getElementById('video');

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: 'user' } })
        .then(function (stream) {
          video.srcObject = stream;
          this.videoTracks = stream.getVideoTracks();
          //video.play();
        })
        .catch(function (error) {
          alert("Fail on access your camera!");
        });
    }
  } */

  takePicture() {
    let video = <any>document.getElementById('video');
    let canvas = <any>document.getElementById('canvas');
    let context = canvas.getContext('2d');

    let dataURL = canvas.toDataURL('image/jpeg');

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    video.classList.add('animated');
    video.classList.add('flash');

    // Stop all video streams.
    //this.videoTracks.forEach(function(track) {track.stop()});
    this.videoTracks.forEach(element => {
      element.stop()
    });

    setTimeout(() => {
      this.dismiss();
      this.presentTaked(dataURL);
    }, 800)
  }

  async presentTaked(canvas) {
    const modal = await this.modalctr.create({
      component: SendPicPage,
      componentProps: {
        "photo": canvas
      }
    });
    return await modal.present();
  }

  take(){
    this.camera.getPicture(this.options).then((imageData) => {
      //this.imagem = this.sn.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + imageData);
      this.imagem = ('data:image/jpeg;base64,' + imageData);
      this.sendPic();
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err);
    });
  }

  async sendPic() {
    const modal = await this.modalctr.create({
      component: SendPicPage,
      componentProps: {
        "photo": this.imagem
      }
    });
    return await modal.present();
  }

}
