export class Consent {

  constructor(
    public id: number,
    public status: string,
    // public hipaa_signed: Date,
    // public hipaa_expires: Date,
    public hipaa_signed: string,
    public hipaa_expires: string,
    public attachment?: any
  ) {}

}
