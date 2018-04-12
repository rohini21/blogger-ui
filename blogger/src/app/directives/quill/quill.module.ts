import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { QuillComponent }   from './quill.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    QuillComponent
  ],
  exports: [
    QuillComponent
  ],
  providers: [  ],
  bootstrap: [  ]
})

export class QuillModule { }