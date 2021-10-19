import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Consent } from 'src/app/model/consent';
import { ICON_ATTACH } from 'src/app/constants/icons';

@Component({
  selector: 'app-attach-file-modal',
  templateUrl: './attach-file-modal.component.html',
  styleUrls: ['./attach-file-modal.component.scss']
})
export class AttachFileModal implements OnInit {

  @Input() consent?: Consent;

  // icons
  iAttach = ICON_ATTACH;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log("AttachFileModal: ", this.consent);
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

}
