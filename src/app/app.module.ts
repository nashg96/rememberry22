import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import{ AngularFireModule} from 'angularfire2/';
import{ AngularFireDatabaseModule} from 'angularfire2/database';
import{ AngularFireAuthModule} from 'angularfire2/auth';
import{ AngularFireAuth} from 'angularfire2/auth';
import{FIREBASE_CONFIG} from './firebase.credentials';


import { MyApp } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import {LoginPage} from '../pages/login/login';
import { NamedProvider } from '../providers/named/named';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    NamedProvider,
    NamedProvider
  ]
})
export class AppModule {}
