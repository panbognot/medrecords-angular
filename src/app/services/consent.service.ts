import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Consent } from '../model/consent';
import { CONSENTS } from '../model/mock-consents';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {
  // URL to web api. Replaceable with a real API later on
  private consentsUrl = 'api/consents';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  // GET consents from the API server
  getConsents(): Observable<Consent[]> {
    return this.http.get<Consent[]>(this.consentsUrl)
      .pipe(
        tap(_ => this.log('fetched consents')),
        catchError(this.handleError<Consent[]>('getConsentsObs', []))
      );
  }

  // POST: add a new consent to the server
  addConsent(consent: Consent): Observable<Consent> {
    return this.http.post<Consent>
      (this.consentsUrl, consent, this.httpOptions)
      .pipe(
        tap((newConsent: Consent) =>
          this.log(`added consent w/ id=${newConsent.id}`)
        ),
        catchError(this.handleError<Consent>('addConsent'))
      );
  }

  // DELETE: delete the consent from the API server
  deleteConsent(id: number): Observable<Consent> {
    const url = `${this.consentsUrl}/${id}}`;

    return this.http.delete<Consent>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted consent id=${id}`)),
        catchError(this.handleError<Consent>('deleteConsent'))
      );
  }

/*
  Handle Http operation that failed. Let the app continue.
  @param operation - name of the operation that failed
  @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);

    };
  }

  private log(message: string) {
    console.log(`ConsentService: ${message}`);
  }

}
