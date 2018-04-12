import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { BlogService } from '../../../services/blog.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['../dashboard.component.css'],
  templateUrl: '../templates/dashboard.component.html',
})

export class DashboardComponent implements OnInit {
  currUser: any;
  blogs: any;
  users: any;
	page: string;
  searchEntity: string;
  searchTerm: string;
  subscription: Subscription;

  constructor(
    private BlogService: BlogService,
	  private UserService: UserService,
		private router: Router
  ) { 
    this.getBlogsOnSearch("");
    this.subscription = this.UserService.listenToCurrentUser().subscribe(user => { 
      this.currUser = user;
    });
    /*this.blogs = [];
    this.users = [];*/
  }

  ngOnInit(): void {
    this.page = "dashboard";
    this.searchEntity = "blogs";
  }

  getBlogsOnSearch(term: string): any {
    this.users = [];
  	this.BlogService.getAll({
      term: term,
      user: this.currUser
    })
    .then((res) => {
      this.blogs = res.entity;
    })
  }
 
  getOtherUsersOnSearch(term: string): any {
    this.blogs = [];
    this.UserService.getUsers({
      term: term,
      user: this.currUser
    })
    .then((res) => {
      this.users = res.entity;
    })
  }

  getEntities(): any {
    if(this.searchEntity === 'users')
      this.getOtherUsersOnSearch(this.searchTerm)
    if(this.searchEntity === 'blogs')
      this.getBlogsOnSearch(this.searchTerm)
  }
}