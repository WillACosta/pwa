import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.page.html',
  styleUrls: ['./profile-tab.page.scss'],
})
export class ProfileTabPage implements OnInit {

  public user: string = '';

  constructor(
    private afauth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {

    this.afauth.authState.subscribe(user =>{
      if(user){
        this.user = user.email.slice(0,7);
      }
    });
  }

  logout(){
    this.afauth.signOut()
    .then(()=>{
      console.log("Logout successful");
      localStorage.clear(); //Clear local data of this user
      this.router.navigate(['/login']);
    })
    .catch(()=>{
      console.log("Logout Unsuccessul");
    });
  }

}
