import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Project Components
import {
  AddPatientConsentModal
} from '../modals/add-patient-consent-modal/add-patient-consent-modal.component';
import {
  EditPatientConsentModal
} from '../modals/edit-patient-consent-modal/edit-patient-consent-modal.component';
import {
  DeletePatientConsentModal
} from '../modals/delete-patient-consent-modal/delete-patient-consent-modal.component';
import {
  AttachFileModal
} from '../modals/attach-file-modal/attach-file-modal.component';
import {
  ViewFileModal
} from '../modals/view-file-modal/view-file-modal.component';

// Project Services
import { ConsentService } from '../services/consent.service';

// Project Models and Constants
import { Consent } from '../model/consent';
import {
  ICON_ADD, ICON_ATTACH, ICON_VIEW, ICON_EDIT, ICON_DELETE
} from '../constants/icons';
import {
  MESSAGE_ADD, MESSAGE_ATTACH, MESSAGE_VIEW,
  MESSAGE_EDIT, MESSAGE_DELETE
} from '../constants/tooltip-messages';

@Component({
  selector: 'hipaa-table',
  templateUrl: './hipaa-table.component.html',
  styleUrls: ['./hipaa-table.component.scss']
})
export class HipaaTableComponent implements OnInit {

  // Icons to display
  iAdd = ICON_ADD;
  iAttach = ICON_ATTACH;
  iView = ICON_VIEW;
  iEdit = ICON_EDIT
  iDelete = ICON_DELETE;

  // tooltip messages
  ttAdd = MESSAGE_ADD;
  ttAttach = MESSAGE_ATTACH;
  ttView = MESSAGE_VIEW;
  ttEdit = MESSAGE_EDIT;
  ttDelete = MESSAGE_DELETE;

  consents: Consent[] = [];

  constructor(
    private modalService: NgbModal,
    private consentService: ConsentService
  ) { }

  ngOnInit(): void {
    this.getConsents();
  }

  getConsents(): void {
    this.consentService.getConsents()
      .subscribe(consents => this.consents = consents);
  }

  add(consent: Consent): void {
    // New Consent ID is highest ID + 1
    const maxId = this.consents.reduce((highest, cons) =>
      highest = highest > cons.id ? highest : cons.id, 0
    );
    consent.id = maxId + 1;

    // Call the consents service to add it to the database
    this.consentService.addConsent(consent)
      .subscribe(consent => {
        // Add the new consent to the current consents array to
        // update the HIPAA table in real time
        this.consents.push(consent);
      });
  }

  update(consentOrig: Consent, consentNew: Consent): void {
    // Find the index of the original consent data
    let index = this.consents.findIndex(
        consent => consent === consentOrig
    );

    // Call the consents service to update the data
    this.consentService.updateConsent(consentNew)
      .subscribe(() => {
        // Update the consent data of this component
        this.consents[index] = consentNew;
      });
  }

  delete(consent: Consent): void {
    this.consents = this.consents.filter(c => c !== consent);
    // TODO: Insert the service deletion here
    this.consentService.deleteConsent(consent.id).subscribe();
  }

  openAddConsentModal() {
    const modalRef = this.modalService.open(AddPatientConsentModal);

    modalRef.result.then(
      (result) => {
        console.log("openAddConsentModal: result", result);
        this.add(result);
      },
      (reason) => {}
    );
  }

  openEditConsentModal(consent: Consent) {
    console.log("openEditConsentModal: ", consent);
    const modalRef = this.modalService.open(EditPatientConsentModal);

    modalRef.componentInstance.consent = consent;
    modalRef.result.then(
      (result) => {
        console.log("openEditConsentModal: result", result);
        if (result) {
          this.update(consent, result);
        }
      },
      (reason) => {}
    );
  }

  openDeleteConsentModal(consent: Consent) {
    console.log("openDeleteConsentModal: ", consent);
    const modalRef = this.modalService.open(DeletePatientConsentModal);

    modalRef.componentInstance.consent = consent;
    modalRef.result.then(
      (result) => {
        console.log("openDeleteConsentModal: result", result);
        this.delete(result);
      },
      (reason) => {}
    );
  }

  openAttachModal() {
    const modalRef = this.modalService.open(AttachFileModal);
  }

  openViewFileModal(consent: Consent) {
    const modalRef = this.modalService.open(ViewFileModal);
    modalRef.componentInstance.consent = consent;
  }

}
