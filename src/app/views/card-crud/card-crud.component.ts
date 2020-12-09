import { CardService } from './card.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-crud',
  templateUrl: './card-crud.component.html',
  styleUrls: ['./card-crud.component.css']
})
export class CardCrudComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    
  }

  applyForCreditCard(): void {
    this.cardService.showMessage('Operação executada com sucesso')
  }

}
