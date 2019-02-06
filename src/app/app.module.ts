import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GlobalModalsModule} from './modals/global-modals/global-modals.module';
import {FirstGlobalModalComponent} from './modals/global-modals/first-global-modal/first-global-modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      GlobalModalsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FirstGlobalModalComponent]
})
export class AppModule { }
