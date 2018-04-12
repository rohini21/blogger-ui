import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { User } from './schema';
//services
import { UserService } from './services/user.service';
import { LocalStorageService } from './services/localstorage.service';
import { ModalService } from './services/modal.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, ParamMap } from '@angular/router';

import {Input} from '@angular/core';

import { AuthComponent } from './modules/auth/components/auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [LocalStorageService, ModalService]
})

export class AppComponent implements OnInit {
  user: object;
  message: any;
  subscription: Subscription;
  
  constructor(
    private UserService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService
  ) {
    this.subscription = this.UserService.listenToCurrentUser().subscribe(user => { 
      if(user){
        this.user = user;
      }
    });

  }

  ngOnInit(): void {
    this.UserService.getSession()
    .then((res) => {
      this.user = res;
      this.UserService.setCurrentUser(res)
    }, (xhr) => {
        this.user = null;
        this.router.navigateByUrl('dashboard')
    })
  }

  logout(): void {
    this.user = this.UserService.logout()
    .then((res) => {
      this.user = null;
      this.UserService.setCurrentUser(this.user)
      this.router.navigateByUrl('dashboard')
    })
  }

  login(): void {
    let dialogRef = this.modalService.open(AuthComponent, {
      data: {
        action: "signin"
      }
    })
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  signup(): void {
    this.modalService.open(AuthComponent, {
      data: {
        action: "signup"
      }
    })
  }
}
