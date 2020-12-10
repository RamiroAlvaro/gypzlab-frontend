import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/views/card-crud/card.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    this.cardService.destroyAuth()
    this.router.navigate(['/'])
  }

  isLogged() {
    return this.cardService.token
  }

  getUserId() {
    return localStorage.getItem('id')
  }

}
