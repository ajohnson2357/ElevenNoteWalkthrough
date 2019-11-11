import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  note: Note;

  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
     this.noteService.getNote(routeData.get('id')).subscribe((note: Note) => {
       this.note = note;
     });
    });
  }

}
