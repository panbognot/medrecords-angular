import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgbActiveModal, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

  // Dates to strings
  dateSigned: string = '';
  dateExpires: string = '';

  bsDate: NgbDate | undefined;

  constructor(
    public activeModal: NgbActiveModal,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    console.log("EditPatientConsentModal: ", this.consent);

    if(this.consent?.hipaa_signed) {
      this.dateSigned = this.consent.hipaa_signed.slice();
    }
    if(this.consent?.hipaa_expires) {
      this.dateExpires = this.consent?.hipaa_expires.slice();
    }

    // this.dateSigned = this.datePipe
    //     .transform(this.consent?.hipaa_signed, 'MM/dd/YYYY');
    // this.dateExpires = this.datePipe
    //     .transform(this.consent?.hipaa_expires, 'MM/dd/YYYY');

    console.log("Converting to string: ", this.dateSigned, this.dateExpires);
  }

  closeModal() {
    this.activeModal.close();
  }

  onSave() {
    let updatedConsent: Consent;

    // TODO: Validations before updating the data

    updatedConsent = {
      id: this.consent ? this.consent.id : -1,
      status: this.consent ? this.consent.status : 'Unknown',
      hipaa_signed: this.dateSigned,
      hipaa_expires: this.dateExpires
    };

    console.log("onSave():", updatedConsent);

    // Close modal assuming that there was no problem with
    // the validation and send the updated consent back
    // to the parent
    this.activeModal.close(updatedConsent);
  }

}
