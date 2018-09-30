import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, IonicPage, NavController, Content } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GroupsPage } from '../groups/groups';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  
  @ViewChild(Content) content: Content;

  listchatRef: AngularFireList<any>;
  items: Observable<any[]>;
  message: string = "";
  userid: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDatabase: AngularFireDatabase) {
    this.listchatRef = this.afDatabase.list('/lists/' + GroupsPage.listname + '/chat');

    this.userid = GroupsPage.username;

    this.items = this.listchatRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.scrollToBottom();

  }

  sendMessage() {
    if (!this.message.trim()) return;

    this.listchatRef.push({ message: this.message, user: this.userid, time: Date.now() });
    this.scrollToBottom();
    this.message = "";
  }

  onFocus() {
    this.content.resize();
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
