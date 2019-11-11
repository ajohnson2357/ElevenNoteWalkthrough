import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Note } from '../models/Note'

const Api_Url = 'https://localhost:4200'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getNotes() {
return this.http.get(`${Api_Url}/api/Note`, {headers: this.getHeaders()});
  }

  createNote(note: Note) {
return this.http.post(`${Api_Url}/api/note`, note, {headers: this.getHeaders() });
  }

  getNote(id) {
    return this.http.get(`${Api_Url}/api/note/${id}`, {headers: this.getHeaders() });
  }

  updateNote(note: Note) {
    return this.http.put(`${Api_Url}/api/note`, note, {headers: this.getHeaders() });
  }

  toggleStar(id) {
    this.getNote(id).subscribe((note: Note) => {
      note.isStarred = !note.isStarred;
      this.updateNote(note).subscribe(() => {
        console.log('Star updated!');
      });
    });
  }

  deleteNote(id: number) {
    return this.http.delete(`${Api_Url}/note/${id}`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set(`Authorization`, `Bearer ${localStorage.getItem('id_token')}`);
  }
}
