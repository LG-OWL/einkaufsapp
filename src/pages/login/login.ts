import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Models/user';
import {AngularFireAuth} from "angularfire2/auth";
import { Observable, Subject } from 'rxjs';
import {GroupsPage} from '../groups/groups';
import {HomePage} from '../home/home';
import {RegisterPage}from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user:User){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      // Usernamen speichern
      GroupsPage.username = user.username;
      if(result)
        this.navCtrl.push(HomePage);
    }catch(e){
      alert("Fehler");
    }
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }
}