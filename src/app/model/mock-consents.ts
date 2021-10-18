import { DatePipe, formatDate } from "@angular/common";
import { Consent } from "./consent";

const format = 'shortDate';
const locale = 'en-US';
const pipe = new DatePipe(locale);

export const CONSENTS: Consent[] = [
  {
    id: 1,
    status: true,
    hippa_signed: new Date('04/24/2021'),
    hippa_expires: new Date('04/06/2022')
  },
  {
    id: 2,
    status: true,
    hippa_signed: new Date('05/05/2021'),
    hippa_expires: new Date('05/04/2022')
  },
  {
    id: 3,
    status: true,
    hippa_signed: new Date('06/10/2021'),
    hippa_expires: new Date('12/11/2021')
  },
  {
    id: 4,
    status: true,
    hippa_signed: new Date('07/15/2021'),
    hippa_expires: new Date('01/16/2022')
  },
  {
    id: 5,
    status: true,
    hippa_signed: new Date('08/20/2021'),
    hippa_expires: new Date('08/21/2022')
  },
  {
    id: 6,
    status: true,
    hippa_signed: new Date('09/25/2021'),
    hippa_expires: new Date('09/24/2022')
  },
  {
    id: 7,
    status: true,
    hippa_signed: new Date('10/30/2021'),
    hippa_expires: new Date('11/01/2022')
  },
];
