import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NewItemPage } from '../new-item/new-item';
import { GroupsPage } from '../groups/groups';
import { ChatPage } from '../chat/chat';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase, public alertCtrl: AlertController) {
    GroupsPage.listitemsRef = this.afDatabase.list('/lists/' + GroupsPage.listname + '/items');

    this.items = GroupsPage.listitemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  deleteItem(key: string) {
    GroupsPage.listitemsRef.remove(key);
  }

  load(){
    this.navCtrl.push(NewItemPage);
  }

  chat(){
    this.navCtrl.push(ChatPage);
  }

}