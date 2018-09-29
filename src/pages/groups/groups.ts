import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
/**
 * Generated class for the GroupsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html',
})
export class GroupsPage {
  selectedItem: any;
  items: Array<{title: string, amount: string}>;
  itemNumber: number;
  itemList: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  enterGroup(){
    var gruppenname: string;
    gruppenname = document.getElementById("tfGroupNameExisted").innerHTML;
    
  }

  addUserToGroup(){
    var username = document.getElementById("tfAddUser").innerHTML;
  }

  createNewGroup(){
    var groupname = document.getElementById("tfGroupNameNew").innerHTML;
  }

}
