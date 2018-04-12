import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BlogItemComponent }   from './blog-item.component';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    PipesModule
  ],
  declarations: [
    BlogItemComponent
  ],
  exports: [
    BlogItemComponent
  ],
  providers: [  ],
  bootstrap: [  ]
})

export class BlogItemModule { }