import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/app/views/card-crud/card.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {}

  constructor(private router: Router, private cardService: CardService) { }

  ngOnInit(): void {
    this.user = {
      username: '',
      password: ''
    }
  }

  login(): void {
    this.cardService.loginUser(this.user).subscribe((result) => {
        console.log(result)
        this.cardService.showMessage('Login executado com sucesso !')
        localStorage.setItem ('token', result.token)
      }
    )
    this.router.navigate(['/cards'])
     
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
