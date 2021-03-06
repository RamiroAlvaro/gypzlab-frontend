import { Card } from './card.model';
import { CardService } from './card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-crud',
  templateUrl: './card-crud.component.html',
  styleUrls: ['./card-crud.component.css']
})
export class CardCrudComponent implements OnInit {

  card: Card = {}

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit(): void {
    
  }

  applyForCreditCard(): void {
    this.cardService.create(this.card).subscribe(() => {
      this.cardService.showMessage('Operação executada com sucesso !')
    })
    this.router.navigateByUrl('/cards/read', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/cards']);
  });
  }

}
