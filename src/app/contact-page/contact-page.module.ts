import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {AuthorizedModalsModule} from '../modals/authorized-modals/authorized-modals.module';
import {FirstAuthorizedModalComponent} from '../modals/authorized-modals/first-authorized-modal/first-authorized-modal.component';
import {ContactPageRoutingModule} from './contact-page-routing.module';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
      AuthorizedModalsModule,
      ContactPageRoutingModule
  ],
  entryComponents: [FirstAuthorizedModalComponent]
})
export class ContactPageModule { }
