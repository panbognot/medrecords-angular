import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Consent } from 'src/app/model/consent';
import { ICON_EDIT, ICON_CALENDAR } from 'src/app/constants/icons';

@Component({
  selector: 'app-edit-patient-consent',
  templateUrl: './edit-patient-consent-modal.component.html',
  styleUrls: ['./edit-patient-consent-modal.component.scss']
})
export class EditPatientConsentModal implements OnInit {

  @Input() consent?: Consent;

  // icons
  iEdit = ICON_EDIT;
  iCalendar = ICON_CALENDAR;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log("EditPatientConsentModal: ", this.consent);
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

}
