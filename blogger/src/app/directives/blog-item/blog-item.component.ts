import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule }     from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'blog-item',
  styleUrls: ['./blog-item.component.css'],
  templateUrl: './blog-item.component.html'
})

export class BlogItemComponent {
  showAction: boolean;
  @Input() blog: any;
  @Input() page: string;
  @Input() currUser: any;
  @Input() profile: any;

	
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.showAction = this.page==='profile' && (this.currUser && this.currUser['uid'] === this.profile['uid'])
    console.log("this.showAction----", this.showAction)
  }
}