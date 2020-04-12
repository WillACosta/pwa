import { Component, OnInit } from '@angular/core';

import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup;
  private user: string;

  constructor(private fb: FormBuilder,
    private afauth: AngularFireAuth,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router
  )
  {
    //Firebase realtime : Verifica se o usuário está logado e redireciona-o para a tela inicial
    this.afauth.authState.subscribe(element =>{
      if(element){
        this.user = element.email.slice(0,7);
        this.router.navigate(['/tabs']);
      }
    });
  }

  ngOnInit() {

    //Criar Form
    this.form = this.fb.group({
      email: ['williamamaral521@gmail.com', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  onSubmit() {

    this.presentLoading();
    this.afauth
      .signInWithEmailAndPassword(
        this.form.controls['email'].value,
        this.form.controls['password'].value
      )
      .then(() => {
        this.loadCtrl.dismiss();
        this.presentAlert('Olá!',`Bem vindo de volta, ${this.user}`);
        this.router.navigate(['/tabs']);
      })
      .catch(() => {
        this.loadCtrl.dismiss();
        this.presentAlert('Ops!','Email ou senha inválidos. Tente novamente');
      });
  }

  async presentAlert(header, mess: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: '---',
      message: mess,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadCtrl.create({
      message: 'Por favor aguarde...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }

}
