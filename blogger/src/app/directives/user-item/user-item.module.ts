import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { UserItemComponent }   from './user-item.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    UserItemComponent
  ],
  exports: [
    UserItemComponent
  ],
  providers: [  ],
  bootstrap: [  ]
})

export class UserItemModule { }