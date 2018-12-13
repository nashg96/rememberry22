import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

  slider = [
  {
  	title: 'Start',
  	description: 'description alkjdlkasdlkajskldjklasjdkljakldsjklajdklsj'
  },
  {
  	title: 'flesh',
  	description: 'description'
  },
  {
  	title: 'finsih',
  	description: 'description'
  	}
  ];


  hide() {
  	if(this.hideMe == true){
  		this.hideMe = false;
  	}else{
 		 this.hideMe = true;
  	}
  }

  hide1() {
  	if(this.hideMe1 == true){
  		this.hideMe1 = false;
  	}else{
 		 this.hideMe1 = true;
  	}
  }
  


}
