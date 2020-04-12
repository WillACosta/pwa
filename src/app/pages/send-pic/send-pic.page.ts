import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonSlides, ModalController, AlertController, NavParams, LoadingController } from '@ionic/angular';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as fb from "firebase";
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-pic',
  templateUrl: './send-pic.page.html',
  styleUrls: ['./send-pic.page.scss'],
})
export class SendPicPage implements OnInit {

  /**
 * Acessa algum componente visual
 */
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  public form: FormGroup;
  public user: string = '';
  public photos: AngularFireList<any>;
  public local: string = '';
  public photoUrl: string = '';

  public filter: string = 'original';
  public filters: string[] = [
    "original",
    "_1977",
    "aden",
    "brannan",
    "wilow",
    "inkwell",
    "brooklyn",
    "lark",
    "lofi",
    "maven"
  ];

  @Input() photo: string;

  constructor(
    public modalctr: ModalController,
    private alertCtrl: AlertController,
    private navParams: NavParams,
    public afDb: AngularFireDatabase,
    public afa: AngularFireAuth,
    public fb: FormBuilder,
    private loader: LoadingController,
    private router: Router
  ) {
    this.photoUrl = this.navParams.get('photo'); // Pegar URL da imagem
    console.log(this.photoUrl);
    this.photos = afDb.list('/photos');
    this.afa.authState.subscribe(user => {
      if (user) {
        this.user = user.email.slice(0, 7);
      }
    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      message: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.required
      ])]
    });
  }

  getLocal() {
    if (navigator.geolocation) {
      navigator.geolocation
        .getCurrentPosition((data) => {
          this.local = data.coords.latitude + ',' + data.coords.longitude;
        }), (error) => {
          this.presentAlert('Falha ao obter coordenadas!');
        }
    }
  }

  async presentAlert(mess: string) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: '---',
      message: mess,
      buttons: ['OK']
    });

    await alert.present();
  }

  dismiss() {
    this.modalctr.dismiss({
      'dismissed': true
    });
  }

  changeFilter() {
    //let index = this.slides.getActiveIndex();
    //this.filter = this.filters[index];
    this.slides.getActiveIndex().then(index => {
      console.log(index);
      this.filter = this.filters[index];
   });
  }

  onSubmit() {

    this.presentLoading();

    if (!navigator.onLine) {
      let data = JSON.parse(localStorage.getItem('photos'));
      if (!data)
        data = [];
      data.push({
        user: this.user,
        image: this.photoUrl,
        filter: this.filter,
        location: this.local,
        title: this.form.controls['title'].value,
        message: this.form.controls['message'].value,
        date: fb.database.ServerValue.TIMESTAMP
      });
      localStorage.setItem('photos', JSON.stringify(data));
      this.loader.dismiss();
      this.presentAlert('Salvo offline!');
      return;
    }else{
      this.photos.push({
        user: this.user,
        image: this.photoUrl,
        filter: this.filter,
        location: this.local,
        title: this.form.controls['title'].value,
        message: this.form.controls['message'].value,
        date: fb.database.ServerValue.TIMESTAMP
      })
        .then(() => {
          this.loader.dismiss();
          this.presentAlert('Fotografia salva!');
          this.dismiss();
        })
        .catch(() => {
          this.loader.dismiss();
          this.presentAlert('Falha ao salvar! Tente novaente.');
        });
    }
  }

  async presentLoading() {
    const loading = await this.loader.create({
      message: 'Por favor aguarde...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

}
