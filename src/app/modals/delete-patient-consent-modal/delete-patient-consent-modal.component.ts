import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Consent } from 'src/app/model/consent';
import { ICON_DELETE } from 'src/app/constants/icons';

@Component({
  selector: 'app-delete-patient-consent-modal',
  templateUrl: './delete-patient-consent-modal.component.html',
  styleUrls: ['./delete-patient-consent-modal.component.scss']
})
export class DeletePatientConsentModal implements OnInit {

  @Input() consent?: Consent;
  test = 23; //delete this once data passing is good

  // icon/s
  iDelete = ICON_DELETE;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log("DeletePatientConsentModal: ", this.consent);
  }

  deleteConsent() {
    console.log("DeletePatientConsentModal: deleteConsent()",
        this.consent);
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

}
