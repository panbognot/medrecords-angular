import { Consent } from "./consent";

export const CONSENTS: Consent[] = [
  {
    id: 1,
    status: 'Active',
    hipaa_signed: '04/24/2021',
    hipaa_expires: '04/06/2022'
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

// export const CONSENTS: Consent[] = [
//   {
//     id: 1,
//     status: 'Active',
//     hipaa_signed: new Date('04/24/2021'),
//     hipaa_expires: new Date('04/06/2022')
//   },
//   {
//     id: 2,
//     status: 'Expired',
//     hipaa_signed: new Date('05/05/2021'),
//     hipaa_expires: new Date('10/04/2021')
//   },
//   {
//     id: 3,
//     status: 'Inactive',
//     hipaa_signed: new Date('06/10/2021'),
//     hipaa_expires: new Date('12/11/2021')
//   },
//   {
//     id: 4,
//     status: 'Active',
//     hipaa_signed: new Date('07/15/2021'),
//     hipaa_expires: new Date('01/16/2022')
//   },
//   {
//     id: 5,
//     status: 'Active',
//     hipaa_signed: new Date('08/20/2021'),
//     hipaa_expires: new Date('08/21/2022')
//   },
//   {
//     id: 6,
//     status: 'Active',
//     hipaa_signed: new Date('09/25/2021'),
//     hipaa_expires: new Date('09/24/2022')
//   },
//   {
//     id: 7,
//     status: 'Active',
//     hipaa_signed: new Date('10/30/2021'),
//     hipaa_expires: new Date('11/01/2022')
//   },
// ];
