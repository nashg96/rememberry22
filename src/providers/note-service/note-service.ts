import { HttpClient } from '@angular/common/http';
import { fowardRef, Injectable, NgModule } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Note } from '../../models/note.model';

@Injectable()
export class NoteService {
	private notes: Note[] = [];
  private note: Note;

  constructor(public storage: Storage) {
    
  }

  saveNote(note: Note){
  	note.createDate = Date.now();
  	this.notes.push(note);
  	this.storage.set('notes', this.notes);
  }

  getAllNotes(){
  	return this.storage.get('notes').then(
  	(notes) => {
  	this.notes = notes == null ? [] : notes;
  	return [...this.notes];

  		}
  	)
  }

  getNote(createDate: number){
    return this.storage.get('notes').then((notes) =>{
      this.note = [...notes].find(r => r.createDate === createDate);
      return this.note;
    });
  }

  deleteNote(createDate: number){
    this.notes = this.notes.filter((note) => {
    return note.createDate !== createDate
    });
    this.storage.set('notes', this.notes);
  }

}
