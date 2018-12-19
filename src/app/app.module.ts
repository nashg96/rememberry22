import { BrowserModule } from '@angular/platform-browser';
import { forwardRef,ErrorHandler, NgModule } from '@angular/core';
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
import { AddNotePage } from '../pages/add-note/add-note';
import { NoteService } from '../providers/note-service/note-service';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewNotePage } from '../pages/view-note/view-note';

@NgModule({
  declarations: [
    MyApp,
    AddNotePage,
    ViewNotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddNotePage,
    ViewNotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    NamedProvider,
    NamedProvider,
    NoteService
  ]
})
export class AppModule {}
