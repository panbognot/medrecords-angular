import { Injectable } from '@angular/core';

import { Consent } from '../model/consent';
import { CONSENTS } from '../model/mock-consents';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {

  constructor() { }

  getConsents(): Consent[] {
    return CONSENTS;
  }

}
