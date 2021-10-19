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
  dateSigned: any;
  dateExpires: any;

  bsDate: NgbDate | undefined;

  constructor(
    public activeModal: NgbActiveModal,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    console.log("EditPatientConsentModal: ", this.consent);

    // this.dateSigned = this.datePipe
    //     .transform(this.consent?.hipaa_signed, 'MM/dd/YYYY');
    // this.dateExpires = this.datePipe
    //     .transform(this.consent?.hipaa_expires, 'MM/dd/YYYY');

    console.log("Converting to string: ", this.dateSigned, this.dateExpires);
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  }

  onSave() {
    // this.consent?.hipaa_signed = new Date(this.dateSigned);
  }

}
