import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { DashboardComponent }   from './components/dashboard.component';
import { BlogItemComponent }   from '../../directives/blog-item/blog-item.component';
import { BlogItemModule }   from '../../directives/blog-item/blog-item.module';
import { UserItemModule }   from '../../directives/user-item/user-item.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BlogItemModule,
    UserItemModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [  ],
  bootstrap: [  ]
})
export class DashboardModule { }