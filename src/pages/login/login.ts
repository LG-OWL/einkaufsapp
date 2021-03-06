import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../Models/user';
import {AngularFireAuth} from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {GroupsPage} from '../groups/groups';
import {HomePage} from '../home/home';
import {RegisterPage}from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  [x: string]: any;

  user = {} as User;
  userdataRef: AngularFireList<any>;
  usernameObservable: Observable<any[]>;

  constructor(private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user:User){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
      if(result)
        GroupsPage.email = user.email.replace(".", "|");;

        this.userdataRef = this.afDatabase.list('/users/' + GroupsPage.email + '/data');

        // Username laden
        let subscription = this.userdataRef.snapshotChanges().subscribe(actions => { 
          actions.forEach(action => {
            GroupsPage.username = action.payload.key;
            subscription.unsubscribe();
          });
        });

        this.navCtrl.push(HomePage);
    }catch(e){
      alert("Fehler");
    }
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }
}