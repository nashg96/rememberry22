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
  	description: '<b>Attention</b> - Paying attention to <br> information<br><b>Encoding</b> - Taking in the information<br><b>Storage</b> - Storing information<br><b>Consolidation</b> - Practice/Rehearsing<br><b>Retrieval</b> - Being able to get back <br>the stored information',
    image: "assets/imgs/Diagram1.png"
  },
  {
  	title: 'Different aspects of Memory',
  	description: '<b>Immediate</b> - Information is held <br> for a brief time in the memory<br><b>Short term</b> - Information is stored for<br> long enough to be used<br><b>Long term</b> - A memory of epsiodes of<br> things that have happened to you <br>in the past<br><b>Prospective</b> - The ability to remember<br> things for the future',
     image: "assets/imgs/diagram2.png"
  },
  {
  	title: '',
  	description: '<b>Auditory</b> - Remebering events using words <br> e.g. remebering a story<br><b>Visual</b> - Remebering pictures or images<br><b>Motor</b> - Remembering a partcicular motor <br>skill e.g. walking<br><b>Procedrual</b> - Remenbering a procedure <br>e.g. riding a bike',
    image: "assets/imgs/diagram3.png"
  	}
  ];

  slider2 = [
  {
    title: 'Attention',
    description: 'Attention is the basis of all new learning<br>It generally explains our ability to focus and hold attention of words on a page, music, a conversation.<br>Attention helps us to select specific informationand decide what is important and what is not ',
    image: "assets/imgs/attention1.jpg"
  },
  {
    image: "assets/imgs/attention2.png",
    title: 'Types of Attention',
    description: '',
     
  },
  {
    title: '',
    description: '',
    image: "assets/imgs/attention3.png"
    },
  {
    title: '',
    description: '',
    image: "assets/imgs/attention4.png"
    },
  {
    title: '',
    description: '',
    image: "assets/imgs/attention5.png"
    }
  ];


  hide() {
  	if(this.show == true){
  		  this.show = false;
  	}else{
 		    this.show = true;
  	}
  }

  hide1() {
  	if(this.show1 == true){
  		this.show1 = false;
      this.show2 = false;
  	}else{
 		 this.show1 = true;
      this.show2 = false;
  	}
  }

  hide2() {
    if(this.show2 == true){
      this.show2 = false;
      this.show1 = false;
    }else{
     this.show2 = true;
     this.show1 = false;
    }
  }
  
  goToAttentionSurv(){
    this.navCtrl.push('SpecialPage');
  }


}
