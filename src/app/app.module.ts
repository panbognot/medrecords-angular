import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 3rd Party Libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Custom Modules & Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HipaaTableComponent } from './hipaa-table/hipaa-table.component';

// Modal Components
import {
  AddPatientConsentModal
} from './modals/add-patient-consent-modal/add-patient-consent-modal.component';
import {
  EditPatientConsentModal
} from './modals/edit-patient-consent-modal/edit-patient-consent-modal.component';
import {
  DeletePatientConsentModal
} from './modals/delete-patient-consent-modal/delete-patient-consent-modal.component';
import {
  AttachFileModal
} from './modals/attach-file-modal/attach-file-modal.component';
import { ViewFileModal } from './modals/view-file-modal/view-file-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HipaaTableComponent,
    AddPatientConsentModal,
    EditPatientConsentModal,
    DeletePatientConsentModal,
    AttachFileModal,
    ViewFileModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
