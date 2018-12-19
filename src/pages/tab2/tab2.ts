import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNotePage } from '../add-note/add-note';
import { NoteService } from '../../providers/note-service/note-service';
import { Note } from '../../models/note.model';
import { ViewNotePage } from '../view-note/view-note';

/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {
  
  private notes: Promise<Note[]>;
  private note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
  }

  ionViewWillEnter(){
    this.notes = this.getAllNotes();
  }


  addNote(){
    this.navCtrl.push(AddNotePage);
  }

  getNote(createDate: number){
   this.noteService.getNote(createDate).then((n) => {
    this.note = n;
    this.navCtrl.push(ViewNotePage, {note: this.note })
    })
  }

  getAllNotes(){
  return this.noteService.getAllNotes();
  }
}
