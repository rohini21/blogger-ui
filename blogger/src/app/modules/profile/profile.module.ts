import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ProfileComponent }   from './components/profile.component';
import { BlogItemComponent }   from '../../directives/blog-item/blog-item.component';
import { BlogItemModule }   from '../../directives/blog-item/blog-item.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BlogItemModule
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [  ],
  bootstrap: [  ]
})
export class ProfileModule { }