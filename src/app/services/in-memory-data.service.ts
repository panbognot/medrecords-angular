import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Consent } from '../model/consent';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const consents = [
      {
        id: 1,
        status: 'Active',
        hipaa_signed: '04/24/2021',
        hipaa_expires: '04/06/2022',
        attachment: 'https://picsum.photos/id/237/300/'
      },
      {
        id: 2,
        status: 'Expired',
        hipaa_signed: '05/05/2021',
        hipaa_expires: '10/04/2021'
      },
      {
        id: 3,
        status: 'Inactive',
        hipaa_signed: '06/10/2021',
        hipaa_expires: '12/11/2021'
      },
      {
        id: 4,
        status: 'Active',
        hipaa_signed: '07/15/2021',
        hipaa_expires: '01/16/2022'
      },
      {
        id: 5,
        status: 'Active',
        hipaa_signed: '08/20/2021',
        hipaa_expires: '08/21/2022'
      },
      {
        id: 6,
        status: 'Active',
        hipaa_signed: '09/25/2021',
        hipaa_expires: '09/24/2022'
      },
      {
        id: 7,
        status: 'Active',
        hipaa_signed: '10/30/2021',
        hipaa_expires: '11/01/2022'
      },
    ];
    return {consents};
  }

  /*
    Overrides the genId method to ensure that a consent always has
    an id. If the consents array is empty, the method below returns
    the initial number (100).
    If the consents array is not empty, the method below returns
    the highest consent id + 1.
  */
  genId(consents: Consent[]): number {
    return consents.length > 0 ?
        Math.max(...consents.map(consent => consent.id)) + 1 : 100;
  }

}
