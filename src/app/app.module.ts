import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { GroupsPage } from '../pages/groups/groups';
import { NewItemPage } from '../pages/new-item/new-item';
import {EinkaufbarcodePage} from '../pages/einkaufbarcode/einkaufbarcode';
import {ScannerPage} from '../pages/scanner/scanner';
import {ChatPage} from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { environment } from '../environment/environment-dev';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    GroupsPage,
    RegisterPage,
    NewItemPage,
    EinkaufbarcodePage,
    ScannerPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    GroupsPage,
    RegisterPage,
    NewItemPage,
    EinkaufbarcodePage,
    ScannerPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})

export class AppModule {}