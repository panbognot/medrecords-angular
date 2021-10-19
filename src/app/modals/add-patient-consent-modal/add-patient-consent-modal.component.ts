import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Consent } from 'src/app/model/consent';
import { ICON_ADD, ICON_CALENDAR } from 'src/app/constants/icons';

@Component({
  selector: 'add-patient-consent-modal',
  templateUrl: './add-patient-consent-modal.component.html',
  styleUrls: ['./add-patient-consent-modal.component.scss']
})
export class AddPatientConsentModal implements OnInit {

  consent: Consent | undefined;
  signedValue: string = '';
  expiresValue: string = '';

  // icons
  iAdd = ICON_ADD;
  iCalendar = ICON_CALENDAR;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log("AddPatientConsentModal: ", this.consent);
  }

  add(): void {
    console.log("add: ", this.signedValue, this.expiresValue);
    this.consent = {
      id: -1,
      status: 'Active',
      hipaa_signed: this.signedValue,
      hipaa_expires: this.expiresValue
    };

    // Close modal assuming that there was no problem with
    // the deletion and send the ID back to the parent
    this.activeModal.close(this.consent);
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

}
