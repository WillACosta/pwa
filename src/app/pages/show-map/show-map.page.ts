import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.page.html',
  styleUrls: ['./show-map.page.scss'],
})
export class ShowMapPage implements OnInit {

  local: string;

  constructor(
    private navParams: NavParams,
    private modalctr: ModalController
  ) {
    this.local = this.navParams.get('local');
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    let html = '<iframe style=" height: 90vh; width="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAx8f3CTTFS_oOWdaIszZ9wGShBJETr8pE&q={{ this.local }}" allowfullscreen></iframe>'
    document.getElementById('map').innerHTML = html;
  }

  dismiss() {
    this.modalctr.dismiss({
      'dismissed': true
    });
  }

}
