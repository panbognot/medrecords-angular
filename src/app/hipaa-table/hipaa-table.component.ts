import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Project Components
import {
  AddPatientConsentModal
} from '../modals/add-patient-consent-modal/add-patient-consent-modal.component';

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
    this.consents = this.consentService.getConsents();
  }

  openAddConsentModal() {
    const modalRef = this.modalService.open(AddPatientConsentModal);
  }

}
