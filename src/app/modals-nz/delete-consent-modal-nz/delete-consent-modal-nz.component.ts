import { Component, Input, OnInit } from '@angular/core';
import {
  NzModalRef, NzModalService
} from 'ng-zorro-antd/modal';

import { Consent } from 'src/app/model/consent';

@Component({
  selector: 'delete-consent-modal',
  templateUrl: './delete-consent-modal-nz.component.html',
  styleUrls: ['./delete-consent-modal-nz.component.scss']
})
export class DeleteConsentModalNzComponent implements OnInit {

  @Input() consent?: any;

  isVisible = false;
  isConfirmLoading = false;

  constructor(
    private modal: NzModalRef
  ) { }

  ngOnInit(): void {
    console.log("DeleteConsentModalComponent: ", this.consent);
  }

  deleteConsent() {
    // Close modal assuming that there was no problem with
    // the deletion and send the ID back to the parent
    this.modal.close(this.consent);
  }

  destroyModal(): void {
    console.log("destroyModal():");
    this.modal.close();
  }

}
