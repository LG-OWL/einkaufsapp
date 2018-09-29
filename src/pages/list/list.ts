import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NewItemPage } from '../new-item/new-item';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {
  
  selectedItem: any;

  itemsRef: AngularFireList<any>;
  groupname: string;
  listname: string;
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
    this.groupname = "group 1";
    this.listname = "list 1";
    this.itemsRef = afDatabase.list('/groups/' + this.groupname + '/' + this.listname);
    
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  addItem(newName: string, newAmount: string) {
    this.itemsRef.push({ name: newName, amount: newAmount });
  }
  updateItem(key: string, newName: string, newAmount: string) {
    this.itemsRef.update(key, { name: newName, amount: newAmount });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }

  load(){
    console.log("test")
    this.navCtrl.push(NewItemPage);
  }
}
