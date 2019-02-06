import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {FirstNormalModalComponent} from '../../modals/normal-modals/first-normal-modal/first-normal-modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private bsModalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(): void {
    const initialState = {
      list: ['111','222','333']
    };
    this.bsModalService.show(FirstNormalModalComponent, {initialState});
  }

}
