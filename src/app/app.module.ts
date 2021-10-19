import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// 3rd Party Libraries
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

@NgModule({
  declarations: [
    AppComponent,
    HipaaTableComponent,
    AddPatientConsentModal,
    EditPatientConsentModal,
    DeletePatientConsentModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
