import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { GroupsPage } from '../groups/groups';
import { ScannerPage } from '../scanner/scanner';

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

  loadScannerPage(){
    this.navCtrl.push(ScannerPage);
  }
}
