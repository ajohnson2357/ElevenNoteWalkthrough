import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
  } from '@angular/material'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { NoteService } from './services/note.service';
import { NoteIndexComponent } from './Components/note/note-index/note-index.component';
import { NoteCreateComponent } from './Components/note/note-create/note-create.component';
import { NoteDetailComponent } from './components/note/note-detail/note-detail.component';
import { NoteEditComponent } from './components/note/note-edit/note-edit.component';
import { NoteDeleteComponent } from './components/note/note-delete/note-delete.component';
import { AuthGuard } from './Guards/auth.guard';

const routes = [
 { path: 'register', component: RegistrationComponent },
 { path: 'login', component: LoginComponent },
 {
   path: 'notes', canActivate: [AuthGuard], children: [
     {path: '', component: NoteIndexComponent },
      { path: 'create', component: NoteCreateComponent },
      {path: 'detail/:id', component: NoteDetailComponent},
      { path: 'edit/:id', compnent: NoteEditComponent },
      { path: 'delete/:id', component: NoteDeleteComponent }
   ]
  },
 {path: '**', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    NoteIndexComponent,
    NoteCreateComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NoteDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    NoteService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
