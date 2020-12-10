import { Card } from './card.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from 'src/app/components/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = 'http://localhost:8000/'
  token = 'Token 3b46b858298f51a2be3084555c7b9bc50ab3bb20'
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token)

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      })
  }

  create(card: Card): Observable<Card> {
      const url = `${this.baseUrl}cards/`
      return this.http.post<Card>(url, card, {headers: this.httpHeaders})
  }

  read(): Observable<Card[]> {
    const url = `${this.baseUrl}cards/`
    return this.http.get<Card[]>(url, {headers: this.httpHeaders})
  }

  readById(id: number): Observable<Card> {
    const url = `${this.baseUrl}cards/${id}/`
    return this.http.get<Card>(url, {headers: this.httpHeaders})
  }

  update(card: Card): Observable<Card> {
    const url = `${this.baseUrl}cards/${card.id}/`
    return this.http.put<Card>(url, card, {headers: this.httpHeaders})
  }

  delete(id: number): Observable<Card> {
    const url = `${this.baseUrl}cards/${id}/`
    return this.http.delete<Card>(url, {headers: this.httpHeaders})
  }

  readUserById(id: number): Observable<User> {
    const url = `${this.baseUrl}users/${id}/`
    return this.http.get<User>(url, {headers: this.httpHeaders})
  }

}
