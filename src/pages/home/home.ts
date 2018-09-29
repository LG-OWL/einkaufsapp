import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ListPage } from '../list/list';
import { GroupsPage } from '../groups/groups';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'home.html'
})

export class HomePage {
  
  lists: Observable<any[]>;
  listsRef: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase, public alertCtrl: AlertController) {
    this.listsRef = this.afDatabase.list('/users/' + GroupsPage.username);

    this.lists = this.listsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  deleteList(key: string) {
    this.listsRef.remove(key);
  }

  openList(listname: string) {
    GroupsPage.listname = listname;
    this.navCtrl.push(ListPage);
  }

  load(){
    this.navCtrl.push(GroupsPage);
  }
  
}