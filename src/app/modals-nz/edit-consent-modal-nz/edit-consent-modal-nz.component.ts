import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Consent } from 'src/app/model/consent';

@Component({
  selector: 'edit-consent-modal-nz',
  templateUrl: './edit-consent-modal-nz.component.html',
  styleUrls: ['./edit-consent-modal-nz.component.scss']
})
export class EditConsentModalNzComponent implements OnInit {

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
    console.log("EditConsentModalNzComponent");
    this.signedValue = this.consent.hipaa_signed.slice();
    this.expiresValue = this.consent.hipaa_expires.slice();

    console.log("Converting to string: ", this.signedValue, this.expiresValue);
  }

  onSave() {
    let updatedConsent: any;

    // TODO: Validations before updating the data
    if (this.signedValue && this.expiresValue) {
      updatedConsent = {
        id: this.consent ? this.consent.id : -1,
        status: this.consent ? this.consent.status : 'Unknown',
        hipaa_signed: this.datepipe.transform(this.signedValue, this.dateFormat),
        hipaa_expires: this.datepipe.transform(this.expiresValue, this.dateFormat),
      };

      console.log("onSave():", updatedConsent);

      // Close modal assuming that there was no problem with
      // the validation and send the updated consent back
      // to the parent
      this.modal.close(updatedConsent);
    }
  }

  destroyModal(): void {
    console.log("destroyModal():");
    this.modal.close();
  }

}
