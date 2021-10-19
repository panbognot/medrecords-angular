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

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log("ViewFileModal: ", this.consent);
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

}
