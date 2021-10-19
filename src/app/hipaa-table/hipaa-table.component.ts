import { Component, OnInit } from '@angular/core';

// Project Custom Files
import { Consent } from '../model/consent';
import { CONSENTS } from '../model/mock-consents';
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

  consents = CONSENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
