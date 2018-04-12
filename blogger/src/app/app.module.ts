import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { BlogModule } from './modules/blog/blog.module';
import { AppRoutingModule }     from './app-routing.module';
import { BlogItemModule }   from './directives/blog-item/blog-item.module';

import { AppComponent }         from './app.component';
import { LocalStorageService } from './services/localstorage.service';
import { BuiltApiService } from './services/built-api/builtapi.service';
import { RestfulService } from './services/built-api/rest.service';
import { UserService } from './services/user.service';
import { BlogService } from './services/blog.service';
import { UtilsService } from './services/utils.service';
import { ModalService } from './services/modal.service';
import {MatDialogModule} from '@angular/material';
import { BlogItemComponent }   from './directives/blog-item/blog-item.component';
import { UserItemComponent }   from './directives/user-item/user-item.component';
//import { QuillComponent }   from './directives/quill/quill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    ProfileModule,
    BlogModule,
    MatDialogModule,
    BrowserAnimationsModule,
    BlogItemModule
  ],
  declarations: [ 
    AppComponent
  ],
  exports: [
  ],
  providers: [ 
    BlogService,
    LocalStorageService,
    UserService,
    UtilsService,
    ModalService,
    BuiltApiService,
    RestfulService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }