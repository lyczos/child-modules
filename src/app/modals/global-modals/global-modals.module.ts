import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstGlobalModalComponent } from './first-global-modal/first-global-modal.component';
import {ModalModule} from 'ngx-bootstrap';
import {ModalsModule} from '../modals.module';

@NgModule({
  declarations: [FirstGlobalModalComponent],
  imports: [
    CommonModule,
      ModalModule,
      ModalsModule
  ]
})
export class GlobalModalsModule { }
