import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule }     from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'user-item',
  styleUrls: ['./user-item.component.css'],
  templateUrl: './user-item.component.html'
})

export class UserItemComponent {
  @Input() user: any;
	
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  	
  }

  ngOnInit(): void {
    
  }
}