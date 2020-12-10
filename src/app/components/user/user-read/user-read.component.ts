import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/views/card-crud/card.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  user: User = {}

  constructor(
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.cardService.readUserById(id).subscribe(user => {
      this.user = user
    });
  }

  goCards(): void {
    this.router.navigate(['/cards']);
  }

}
