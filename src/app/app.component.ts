import { Component } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {FirstGlobalModalComponent} from './modals/global-modals/first-global-modal/first-global-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-modules';
  constructor(private bsModalService: BsModalService) { }


  openModal(): void {
    this.bsModalService.show(FirstGlobalModalComponent);
  }
}
