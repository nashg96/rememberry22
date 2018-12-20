import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the SpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-special',
  templateUrl: 'special.html',
})
export class SpecialPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialPage');
  }

  goBack(){
  	this.navCtrl.pop();
  }

}
