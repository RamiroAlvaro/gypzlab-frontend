import { Card } from './../../../views/card-crud/card.model';
import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/views/card-crud/card.service';

@Component({
  selector: 'app-card-read',
  templateUrl: './card-read.component.html',
  styleUrls: ['./card-read.component.css']
})
export class CardReadComponent implements OnInit {

  cards: Card[]
  displayedColumns = ['id', 'solicitation_status', 'credit', 'solicitation_date', 'score', 'action'];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
     this.cardService.read().subscribe(cards => {
       this.cards = cards
     })
  }

}
