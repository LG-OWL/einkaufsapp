import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { GroupsPage } from '../groups/groups';
import { ScannerPage } from '../scanner/scanner';
import { Observable } from 'rxjs';
import { AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lists: Observable<any[]>;
  listsRef: AngularFireList<any>;

  constructor(public navCtrl: NavController) {

    // Listen laden
    this.lists = this.listsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
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
