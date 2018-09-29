import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { GroupsPage } from '../groups/groups';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  load(){
    this.navCtrl.push(LoginPage);
  }

  loadGroupPage(){
    this.navCtrl.push(GroupsPage);
  }
}
