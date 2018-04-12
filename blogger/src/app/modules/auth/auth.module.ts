import { NgModule }       from '@angular/core';
import { Router, RouterModule }            from '@angular/router';

import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AuthComponent }   from './components/auth.component';
import {MatDialogModule} from '@angular/material';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    MatDialogModule
  ],
  declarations: [
    AuthComponent
  ],
  entryComponents: [
    AuthComponent
  ],
  providers: [ 
  ]
})
export class AuthModule { }