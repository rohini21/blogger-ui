import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Subscription } from 'rxjs/Subscription';
import { Router }            from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'profile',
  styleUrls: ['../profile.component.css'],
  templateUrl: '../templates/profile.component.html',
})
export class ProfileComponent implements OnInit {
  subscription: Subscription;
  currUser: any = undefined;
  profileUser: any = undefined;
  blogs: any;
  page: string

  constructor(
    private UserService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private BlogService: BlogService
  ) {

    this.subscription = this.UserService.listenToCurrentUser().subscribe(user => { 
      this.currUser = user;
    });
    this.currUser = this.UserService.getCurrentUser()
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     /* this.blogs = [];*/
      this.getProfileUser();
    });
    this.page = "profile";
  }

  getProfileUser(): any {
    this.UserService.getProfileUser(this.route.snapshot.params['uid'])
    .then((res) => {
      this.profileUser = res.entity[0];
      this.getUserBlogs(this.profileUser)
    })
  }

  getUserBlogs(owner: any): any {
    this.BlogService.getUserBlogs({
      owner_uid: owner._id,
      published: !this.currUser || (this.currUser && owner.uid !== this.currUser.uid)
    })
    .then((res) => {
      this.blogs = res.entity;
    })
  }
}