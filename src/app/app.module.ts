import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewItemPage } from '../pages/new-item/new-item';
import { LoginPage } from '../pages/login/login';
import { GroupsPage } from '../pages/groups/groups';
import { ScannerPage } from '../pages/scanner/scanner';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { environment } from '../environment/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// For the OCR (Tesseract)
import { Camera } from '@ionic-native/camera';
//import { NgProgressModule } from '@ngx-progressbar/core';
//import { ScannerPageModule } from '../pages/scanner/scanner.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewItemPage,
    LoginPage,
    GroupsPage,
    ScannerPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    //ScannerPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    //NgProgressModule.forRoot(),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewItemPage,
    LoginPage,
    GroupsPage,
    ScannerPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    HttpClientModule,
    BarcodeScanner
  ]
})

export class AppModule {}