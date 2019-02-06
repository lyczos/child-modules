import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalsModule} from '../modals.module';
import {ModalModule} from 'ngx-bootstrap';
import { FirstAuthorizedModalComponent } from './first-authorized-modal/first-authorized-modal.component';

@NgModule({
  declarations: [FirstAuthorizedModalComponent],
  imports: [
    CommonModule,
      ModalsModule,
      ModalModule
  ],
  exports: [FirstAuthorizedModalComponent]
})
export class AuthorizedModalsModule { }
