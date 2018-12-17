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
  	title: 'Memory is a process',
  	description: 'Attention - Paying attention to information<br>Encoding - taking in the information<br>Storage - Storing information<br>Consolidation - practice/rehearsing<br>Retrieval - Being able to get  back the stored information',
    image: "assets/imgs/Diagram1.png"
  },
  {
  	title: 'Different aspects of Memory',
  	description: 'Immediate - Information is held for a brief time in the memory<br>Short term - Information is stored for long enough to be used<br>Long term - A mememory of epsiodes of things that have happened to you in the past<br>Prospective - The ability to remember things for the future',
     image: "assets/imgs/diagram2.png"
  },
  {
  	title: '',
  	description: 'Auditory - Remebering events using words e.g. remebering a story<br>Visual - Remebering pictures or images<br>Motor - Remembering a partcicular motor skill e.g. walking<br>Procedrual - Remenbering a procedure e.g. riding a bike',
    image: "assets/imgs/diagram3.png"
  	}
  ];

  slider2 = [
  {
    title: 'Memory is a process',
    description: '',
    image: "assets/imgs/Diagram1.png"
  },
  {
    title: 'Different aspects of Memory',
    description: '',
     image: "assets/imgs/diagram2.png"
  },
  {
    title: '',
    description: '',
    image: "assets/imgs/diagram3.png"
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
      this.hideMe2 = false;
  	}else{
 		 this.hideMe1 = true;
      this.hideMe2 = false;
  	}
  }

  hide2() {
    if(this.hideMe2 == true){
      this.hideMe2 = false;
      this.hideMe1 = false;
    }else{
     this.hideMe2 = true;
     this.hideMe1 = false;
    }
  }
  


}
