import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {MatDialog} from '@angular/material';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ModalService {
  private modalRef;

  constructor(
    private dialog: MatDialog
  ) {}
  
  open(NgbdModalContent:any, data:object): any {
  	return this.dialog.open(NgbdModalContent, data);
  }
}