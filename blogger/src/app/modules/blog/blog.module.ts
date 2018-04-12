import { NgModule }       from '@angular/core';
import { Router, RouterModule }            from '@angular/router';

import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BlogCreateComponent }   from './components/blog-create.component';
import { BlogEditComponent }   from './components/blog-edit.component';
import { BlogViewComponent }   from './components/blog-view.component';
import { QuillModule }   from '../../directives/quill/quill.module';
import { PipesModule } from '../../pipes/pipes.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    QuillModule,
    PipesModule
  ],
  declarations: [
    BlogCreateComponent,
    BlogEditComponent,
    BlogViewComponent
  ],
  providers: [  ]
})
export class BlogModule { }