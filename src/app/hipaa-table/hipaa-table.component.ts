import { Component, OnInit } from '@angular/core';

// 3rd Party Libraries
import {
  faPlus, faPaperclip, faEye, faEdit, faTrashAlt
} from '@fortawesome/free-solid-svg-icons';

// Project Custom Files
import { Consent } from '../model/consent';
import { CONSENTS } from '../model/mock-consents';

@Component({
  selector: 'hipaa-table',
  templateUrl: './hipaa-table.component.html',
  styleUrls: ['./hipaa-table.component.scss']
})
export class HipaaTableComponent implements OnInit {

  // font awesome icons
  iAdd = faPlus;
  iAttach = faPaperclip;
  iView = faEye
  iEdit = faEdit;
  iDelete = faTrashAlt;

  // tooltip messages
  ttAdd = "Add a new HIPAA entry";
  ttAttach = "Attach a file";
  ttView = "View attached file";
  ttEdit = "Edit the HIPAA data";
  ttDelete = "Delete the HIPAA data";

  consents = CONSENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
