import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AlertController } from 'ionic-angular';

import { ListPage } from '../list/list';

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

  public static username: string
  public static listname: string
  public static usersRef: AngularFireList<any>;
  public static listsRef: AngularFireList<any>;
  public static listmembersRef: AngularFireList<any>;
  public static listitemsRef: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase, public alertCtrl: AlertController) {    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupsPage');
  }

  createlist(listname: string){
    GroupsPage.username = "Jonas";
    GroupsPage.listname = listname;

    GroupsPage.usersRef = this.afDatabase.list('/users/' + GroupsPage.username);
    GroupsPage.listsRef = this.afDatabase.list('/lists');
    GroupsPage.listitemsRef = this.afDatabase.list('/lists/' + GroupsPage.listname + '/items');
    GroupsPage.listmembersRef = this.afDatabase.list('/lists/' + GroupsPage.listname + '/members')

    GroupsPage.usersRef.push({ listname: GroupsPage.listname })
    GroupsPage.listmembersRef.push({ name: GroupsPage.username });   

    this.navCtrl.push(ListPage);
  }

  joinlist(listname: string){
    GroupsPage.username = "Neuer User";
    GroupsPage.listname = listname;

    // Prüfen, ob die Gruppe existiert
    let listfound: boolean = false;

    GroupsPage.listsRef = this.afDatabase.list('/lists');

    let subscription = GroupsPage.listsRef.snapshotChanges().subscribe(actions => { 
      actions.forEach(action => {
        if (action.key === listname) {
          listfound = true;
        }
      });

      // Falls die Liste existiert, dieser beitreten, sonst Fehlermeldung ausgeben
      if (listfound) {
        GroupsPage.usersRef = this.afDatabase.list('/users/' + GroupsPage.username);
        GroupsPage.listitemsRef = this.afDatabase.list('/lists/' + GroupsPage.listname + '/items');
        GroupsPage.listmembersRef = this.afDatabase.list('/lists/' + GroupsPage.listname + '/members')

        GroupsPage.usersRef.push({ listname: GroupsPage.listname })
        GroupsPage.listmembersRef.push({ name: GroupsPage.username }); 
        
        subscription.unsubscribe();
        this.navCtrl.push(ListPage);
        return;
      } else {
        this.showAlert();
        subscription.unsubscribe();
        return;
      }
    });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Fehler',
      subTitle: 'Die Liste konnte nicht gefunden werden.',
      buttons: ['OK']
    });
    alert.present();
  }

}