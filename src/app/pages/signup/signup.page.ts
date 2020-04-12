import { Component, OnInit } from '@angular/core';

import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private afauth: AngularFireAuth,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {

    //Criar Form
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      password: ['',Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  onSubmit(){

    this.presentLoading();
    this.afauth
    .createUserWithEmailAndPassword(
      this.form.controls['email'].value,
      this.form.controls['password'].value
    )
    .then(()=>{
      this.loadCtrl.dismiss();
      this.presentAlert('OK! Signed.');
      this.router.navigate(['/login']);
    })
    .catch(()=>{
      this.loadCtrl.dismiss();
      this.presentAlert('ERROR! Check this.');
    });
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

  async presentLoading() {
    const loading = await this.loadCtrl.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }
}
