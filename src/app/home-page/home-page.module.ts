import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {HomePageRoutingModule} from './home-page-routing.module';
import {NormalModalsModule} from '../modals/normal-modals/normal-modals.module';
import {FirstNormalModalComponent} from '../modals/normal-modals/first-normal-modal/first-normal-modal.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule, NormalModalsModule, HomePageRoutingModule
  ],
  entryComponents: [FirstNormalModalComponent]
})
export class HomePageModule { }
