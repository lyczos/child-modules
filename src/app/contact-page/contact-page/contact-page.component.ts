import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {FirstAuthorizedModalComponent} from '../../modals/authorized-modals/first-authorized-modal/first-authorized-modal.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor(private bsModalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(): void {
    this.bsModalService.show(FirstAuthorizedModalComponent);
  }
}
