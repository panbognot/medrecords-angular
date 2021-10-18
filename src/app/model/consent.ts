export class Consent {

  constructor(
    public id: number,
    public status: Boolean,
    public hippa_signed: Date,
    public hippa_expires: Date,
    public attachment?: any
  ) {}

}
