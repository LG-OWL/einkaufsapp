import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { GroupsPage } from '../groups/groups';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  userdataRef: AngularFireList<any>;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User){
    // registrieren
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);

    GroupsPage.email = user.email.replace(".", "|");
    this.userdataRef = this.afDatabase.list('/users/' + GroupsPage.email + '/data/' + user.username);
    this.userdataRef.push({ username: user.username });

    this.navCtrl.push(LoginPage);
  }
}