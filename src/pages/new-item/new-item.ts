import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ListPage } from '../list/list';
import { GroupsPage } from '../groups/groups';


@IonicPage()
@Component({
  selector: 'page-new-item',
  templateUrl: 'new-item.html',
})
export class NewItemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewItemPage');
  }

  addItem(newName: string, newAmount: string) {
    GroupsPage.listitemsRef.push({ name: newName, amount: newAmount });
    this.navCtrl.push(ListPage);
  }

}