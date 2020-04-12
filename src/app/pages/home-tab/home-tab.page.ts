import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { TakePicPage } from '../take-pic/take-pic.page';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ShowMapPage } from '../show-map/show-map.page';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {

  public photos: any[] = [];
  items: any[];

  constructor(
    public modalctr: ModalController,
    private loader: LoadingController,
    private afDb: AngularFireDatabase,
    private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {
      afDb.list('/photos').valueChanges()
        .subscribe((list) => {
          this.items = list;
          console.log(this.items);
        });
    })
  }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalctr.create({
      component: TakePicPage
    });
    return await modal.present();
  }

  async presentLoading() {
    const loading = await this.loader.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

  dismiss() {
    this.modalctr.dismiss({
      'dismissed': true
    });
  }

  //Pegar local e mapear rota
  async showMap(local) {
    const modal = await this.modalctr.create({
      component: ShowMapPage,
      componentProps: {
        "local": local
      }
    });
    return await modal.present();
  }

}
