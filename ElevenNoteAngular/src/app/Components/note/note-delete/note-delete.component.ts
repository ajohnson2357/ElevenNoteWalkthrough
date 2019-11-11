import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/Note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})
export class NoteDeleteComponent implements OnInit {


  note: Note;

  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.noteService.getNote(params.get('id')).subscribe((note: Note) => {
        this.note = note;
      });
    });
   }


   onDelete() {
     this.noteService.deleteNote(this.note.NoteId).subscribe(() => {
       this.router.navigate(['/notes']);
     });
   }

  ngOnInit() {
  }

}
