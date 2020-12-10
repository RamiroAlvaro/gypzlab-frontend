import { Card } from './card.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { User } from 'src/app/components/user/user.model';

import { map, catchError } from 'rxjs/operators';
import { GYPZ_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  token = null;
  httpHeaders;
  userId = null;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { 
    this.initAuth()
  }

  initAuth() {
    this.token = localStorage.getItem('token')
    this.userId = localStorage.getItem('id')
    this.httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Token ${this.token}`)
  }

  destroyAuth() {
    this.token =  null
    this.httpHeaders = null
    this.userId = null
  }

  showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: isError ? ['msg-error'] : ['msg-success']
      })
  }

  create(card: Card): Observable<Card> {
      const url = `${GYPZ_API}cards/`
      return this.http.post<Card>(url, card, {headers: this.httpHeaders}).pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      )
  }

  read(): Observable<Card[]> {
    const url = `${GYPZ_API}cards/`
    return this.http.get<Card[]>(url, {headers: this.httpHeaders}).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Card> {
    const url = `${GYPZ_API}cards/${id}/`
    return this.http.get<Card>(url, {headers: this.httpHeaders}).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  update(card: Card): Observable<Card> {
    const url = `${GYPZ_API}cards/${card.id}/`
    return this.http.put<Card>(url, card, {headers: this.httpHeaders}).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Card> {
    const url = `${GYPZ_API}cards/${id}/`
    return this.http.delete<Card>(url, {headers: this.httpHeaders}).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  readUserById(id: number): Observable<User> {
    const url = `${GYPZ_API}users/${id}/`
    return this.http.get<User>(url, {headers: this.httpHeaders}).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  loginUser(userData): Observable<any> {
    const url = `${GYPZ_API}authenticate/`
    return this.http.post<any>(url, userData).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro !', true)
    return EMPTY
 }

}
