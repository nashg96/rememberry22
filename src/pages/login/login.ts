import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public angularFireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(email, password) {
  	this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password).then((res) => {
  		this.navCtrl.setRoot('MenuPage', {email});
  	});
  }

  async login(email, password) {
  	try{
  		const result = await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  		if(result) {
  			this.navCtrl.push('MenuPage');
		}
   }catch (e){
	console.error(e);
   }

  }

}
