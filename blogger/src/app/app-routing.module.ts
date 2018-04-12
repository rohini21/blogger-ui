import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ProfileComponent }      from './modules/profile/components/profile.component';
import { BlogViewComponent }      from './modules/blog/components/blog-view.component';
import { BlogCreateComponent }      from './modules/blog/components/blog-create.component';
import { BlogEditComponent }      from './modules/blog/components/blog-edit.component';
import { DashboardComponent } 	 from './modules/dashboard/components/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'profile/:uid',  component: ProfileComponent },
  { path: 'blog/:uid/view',  component: BlogViewComponent },
  { path: 'blog/create',  component: BlogCreateComponent },
  { path: 'blog/:uid/edit',  component: BlogEditComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
