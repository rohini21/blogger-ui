import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BlogService } from '../../../services/blog.service';
import { UserService } from '../../../services/user.service';
import { Location }                 from '@angular/common';

@Component({
  selector: 'blog-create',
  styleUrls: ['../blog.component.css'],
  templateUrl: '../templates/blog-create.component.html',
  providers: []
})

export class BlogCreateComponent implements OnInit {
	blog: any;
  currUser: any;

  constructor(
    private BlogService: BlogService,
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.blog = {};
    this.currUser = this.UserService.getCurrentUser();
  }

  create(): void {
    this.blog['owner'] = this.currUser['_id']
    this.blog['published'] = false
    this.BlogService.create(this.blog)
    .then((res) => {
      this.router.navigateByUrl('/blog/'+res.entity.uid+'/edit')
    }, (err) => {
      alert(err)
    })
  }

  receiveMessage(e): void {
    this.blog["content"] = e;
  }
}