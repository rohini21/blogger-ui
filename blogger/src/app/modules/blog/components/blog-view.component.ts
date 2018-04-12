
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'blog-view',
  styleUrls: ['../blog.component.css'],
  templateUrl: '../templates/blog-view.component.html'
})

export class BlogViewComponent implements OnInit {
	blog: any;
  constructor(
    private BlogService: BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
     this.getBlog();
  }
  getBlog(): void {
    // send message to subscribers via observable subject
    this.BlogService.getOne(this.route.snapshot.params['uid'])
    .then((res) => {
      console.log("res.data", res.entity)
      this.blog = res.entity[0];
    }, (err) => {
      alert(err)
    })
  }
}