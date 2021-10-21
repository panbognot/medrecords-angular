import { NgModule } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import en from '@angular/common/locales/en';

// 3rd Party Libraries
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { MyZorroAntdModule } from './modules/my-zorro-antd/my-zorro-antd.module';

// Custom Modules & Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HipaaTableComponent } from './hipaa-table/hipaa-table.component';
import { HipaaTableNzComponent } from './hipaa-table-nz/hipaa-table-nz.component';

// Custom Modal Components
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

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] =
    Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    HipaaTableComponent,
    AddPatientConsentModal,
    EditPatientConsentModal,
    DeletePatientConsentModal,
    AttachFileModal,
    ViewFileModal,
    HipaaTableNzComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // NZmodules
    MyZorroAntdModule,
    /*
      The HttpClientInMemoryWebApiModule module intercepts HTTP
      requests and returns simulated server responses. Remove
      it when a real server is ready to receive requests.
    */
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [
    DatePipe,
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
