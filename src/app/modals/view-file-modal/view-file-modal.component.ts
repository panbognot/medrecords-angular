import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Consent } from 'src/app/model/consent';
import { ICON_VIEW } from 'src/app/constants/icons';

@Component({
  selector: 'app-view-file-modal',
  templateUrl: './view-file-modal.component.html',
  styleUrls: ['./view-file-modal.component.scss']
})
export class ViewFileModal implements OnInit {

  @Input() consent?: Consent;

  // icons
  iView = ICON_VIEW;

  seed: number = 0;
  url: string = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.seed = this.consent ? this.consent.id : 237;
    this.url = 'https://picsum.photos/id/' + this.seed + '/picsum/300';

    console.log("ViewFileModal: ", this.consent, this.url);
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

}
