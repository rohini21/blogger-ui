import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router }            from '@angular/router';

import { UserService } from '../../../services/user.service';
import { ViewEncapsulation } from '@angular/core';

import {MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'auth',
  templateUrl: '../templates/auth.component.html',
  styleUrls: ['../auth.component.css'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})

export class AuthComponent implements OnInit {
  @Input() name;
  action: string;
	user: any;
  constructor(
    private UserService: UserService,
    private router: Router,
    public dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  ngOnInit(): void {
    this.action = this.data.action;
    this.user = {}
  }
  
  signin(): void {
    // send message to subscribers via observable subject.  activeModal.close('Close click')
    this.UserService.signin(this.user)
    .then((res) => {
      this.UserService.setCurrentUser(res.entity)
      this.dialogRef.close({
        data: res.entity
      })
    }, (xhr) => {
      console.log("err", xhr)
      //alert(xhr.entity)
    })
  }

  signup(): void {
    // send message to subscribers via observable subject.  activeModal.close('Close click')
    this.UserService.signup(this.user)
    .then((res) => {
      this.action = "signin"
    }, (xhr) => {
      console.log("err", xhr)
      //alert(xhr.entity.errors.message)
    })
  }

  goto(action: string): void {
    console.log("string in goto--------------", action)
    this.action = action;
  }
}