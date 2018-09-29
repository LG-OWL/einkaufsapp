import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ListPage } from '../list/list';

/**
 * Generated class for the NewItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-item',
  templateUrl: 'new-item.html',
})
export class NewItemPage {

  itemsRef: AngularFireList<any>;
  groupname: string;
  listname: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
    this.groupname = "group 1";
    this.listname = "list 1";
    this.itemsRef = afDatabase.list('/groups/' + this.groupname + '/' + this.listname);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewItemPage');
  }

  addItem(newName: string, newAmount: string) {
    this.itemsRef.push({ name: newName, amount: newAmount });
    this.navCtrl.push(ListPage);
  }

}
