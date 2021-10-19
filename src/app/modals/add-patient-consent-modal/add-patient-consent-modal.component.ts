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

  @Input() consent?: Consent;

  // icons
  iAdd = ICON_ADD;
  iCalendar = ICON_CALENDAR;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log("AddPatientConsentModal: ", this.consent);
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

}
