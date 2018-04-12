import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BlogService } from '../../../services/blog.service';
import { Location }                 from '@angular/common';

@Component({
  selector: 'blog-edit',
  styleUrls: ['../blog.component.css'],
  templateUrl: '../templates/blog-edit.component.html',
  providers: []
})

export class BlogEditComponent implements OnInit {
	blog: any;

  constructor(
    private BlogService: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }


  ngOnInit(): void {
    if(!!this.route.snapshot.params['uid']){
      this.getBlog(this.route.snapshot.params['uid'])
    }
  }

  getBlog(uid: string): any {
    this.BlogService.getOne(uid)
    .then((res) => {
      this.blog = res.entity[0];
    })
  }

  edit(): void {
    this.BlogService.update(this.blog)
    .then((res) => {
      this.blog = res.entity;
      console.log("this.blog ", res.entity)
    }, (err) => {
      alert(err)
    })
  }

  togglePublish(): void {
    this.blog['published'] = !this.blog['published'];
    this.BlogService.update(this.blog)
    .then((res) => {
      alert(res.notice)
      this.blog = res.entity;
      if(this.blog.published){
        this.router.navigateByUrl('/dashboard')
      }
    }, (err) => {
      alert(err)
    })
  }
  delete(): void {
    if (confirm("Do you really want to delete this blog?")) { 
      this.BlogService.delete(this.blog).
      then((res) => {
        this.router.navigateByUrl('/dashboard')
        alert(res.notice);
      })
    }
  }

  receiveMessage(e): void {
    this.blog["content"] = e;
  }
}