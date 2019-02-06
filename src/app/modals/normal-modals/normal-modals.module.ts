import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalsModule} from '../modals.module';
import {ModalModule} from 'ngx-bootstrap';
import { FirstNormalModalComponent } from './first-normal-modal/first-normal-modal.component';

@NgModule({
  declarations: [FirstNormalModalComponent],
  imports: [
    CommonModule,
      ModalsModule,
      ModalModule
  ],
  exports: [FirstNormalModalComponent]
})
export class NormalModalsModule { }
