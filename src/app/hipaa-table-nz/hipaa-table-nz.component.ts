import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

// Project Services
import { ConsentService } from '../services/consent.service';

// Project Models and Constants
import { Consent } from '../model/consent';
import {
  MESSAGE_ADD, MESSAGE_ATTACH, MESSAGE_ATTACH_VIEW,
  MESSAGE_VIEW, MESSAGE_EDIT, MESSAGE_DELETE
} from '../constants/tooltip-messages';

// Project Modals
import {
  DeleteConsentModalNzComponent
} from '../modals-nz/delete-consent-modal-nz/delete-consent-modal-nz.component';
import { AddConsentModalNzComponent } from '../modals-nz/add-consent-modal-nz/add-consent-modal-nz.component';
import { EditConsentModalNzComponent } from '../modals-nz/edit-consent-modal-nz/edit-consent-modal-nz.component';
import { AttachFileModalNzComponent } from '../modals-nz/attach-file-modal-nz/attach-file-modal-nz.component';

@Component({
  selector: 'hipaa-table-nz',
  templateUrl: './hipaa-table-nz.component.html',
  styleUrls: ['./hipaa-table-nz.component.scss']
})
export class HipaaTableNzComponent implements OnInit {

  // tooltip messages
  ttAdd = MESSAGE_ADD;
  ttAttach = MESSAGE_ATTACH;
  ttAttachView = MESSAGE_ATTACH_VIEW;
  ttView = MESSAGE_VIEW;
  ttEdit = MESSAGE_EDIT;
  ttDelete = MESSAGE_DELETE;

  consents: Consent[] = [];

  constructor(
    private modalService: NzModalService,
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
        // Apparently, this updates the nz table data...
        this.consents = [...this.consents];
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
        // Apparently, this updates the nz table data...
        this.consents = [...this.consents];
      });
  }

  delete(consent: Consent): void {
    this.consents = this.consents.filter(c => c !== consent);
    // Insert the service deletion here
    this.consentService.deleteConsent(consent.id).subscribe();
  }

  openAddConsentModal() {
    const modalRef = this.modalService.create({
      nzTitle: 'Add New HIPAA Consent',
      nzContent: AddConsentModalNzComponent
    });

    modalRef.afterClose
      .subscribe(result => {
        if (result) {
          console.log('openAddConsentModal() [afterClose]:', result);
          this.add(result);
        }
      },
      (reason) => {});
  }

  openEditConsentModal(consent: Consent) {
    const modalRef = this.modalService.create({
      nzTitle: 'Edit HIPAA Consent',
      nzContent: EditConsentModalNzComponent,
      nzComponentParams: {
        consent: consent
      }
    });

    modalRef.afterClose
      .subscribe(result => {
        if (result) {
          console.log('openEditConsentModal() [afterClose]:', result);
          if (result) {
            this.update(consent, result);
          }
        }
      },
      (reason) => {});
  }

  openDeleteConsentModal(consent: Consent) {
    console.log("openDeleteConsentModal: ", consent);

    const modalRef = this.modalService.create({
      nzTitle: 'Delete HIPAA Consent',
      nzContent: DeleteConsentModalNzComponent,
      nzComponentParams: {
        consent: consent
      }
    });

    modalRef.afterClose
      .subscribe(result => {
        if (result) {
          console.log('[afterClose] The result is:', result);
          this.delete(result);
        }
      },
      (reason) => {});
  }

  openAttachModal(consent: Consent) {
    // const modalRef = this.modalService.open(AttachFileModal);
    const modalRef = this.modalService.create({
      nzTitle: 'Attach Files and View Them',
      nzContent: AttachFileModalNzComponent,
      nzComponentParams: {
        consent: consent
      }
    });
  }

  openViewFileModal(consent: Consent) {
    // const modalRef = this.modalService.open(ViewFileModal);
    // modalRef.componentInstance.consent = consent;
  }

}
