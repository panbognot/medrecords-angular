import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'add-consent-modal-nz',
  templateUrl: './add-consent-modal-nz.component.html',
  styleUrls: ['./add-consent-modal-nz.component.scss']
})
export class AddConsentModalNzComponent implements OnInit {

  @Input() consent?: any;
  dateFormat = 'MM/dd/yyyy';
  signedValue: string = '';
  expiresValue: string = '';

  isVisible = false;
  isConfirmLoading = false;

  constructor(
    private modal: NzModalRef,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    console.log("AddConsentModalNzComponent");
  }

  add() {
    console.log("add():", this.signedValue, this.expiresValue);

    if (this.signedValue && this.expiresValue) {
      this.consent = {
        id: -1,
        status: 'Active',
        // hipaa_signed: this.signedValue,
        // hipaa_expires: this.expiresValue
        hipaa_signed: this.datepipe.transform(this.signedValue, this.dateFormat),
        hipaa_expires: this.datepipe.transform(this.expiresValue, this.dateFormat),
      };
      // Close modal assuming that there was no problem with
      // the deletion and send the ID back to the parent
      this.modal.close(this.consent);
    }
  }

  destroyModal(): void {
    console.log("destroyModal():");
    this.modal.close();
  }

}
