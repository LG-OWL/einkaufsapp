import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { NewItemPage } from '../new-item/new-item';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  selectedItem: any;
  items: Array<{title: string, amount: string}>;
  itemNumber: number;
  itemList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
    this.itemList = afDatabase.list('/list');
    this.itemList.snapshotChanges().subscribe(actions => { 
      this.items = [];
      actions.forEach(action => {
        const title = action.key;
        const amount = action.payload.toJSON();
        this.items.push({
          title: title,
          amount: amount.toString()
        })
      });
    });

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }

  itemTapped(event, item) {
    
  }

  load(){
    console.log("test")
    this.navCtrl.push(NewItemPage);
  }
}