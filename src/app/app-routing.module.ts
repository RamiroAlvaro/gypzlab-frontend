import { CardCrudComponent } from './views/card-crud/card-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDeleteComponent } from './components/card/card-delete/card-delete.component';
import { CardReadComponent } from './components/card/card-read/card-read.component';
import { LoginComponent } from './components/user/login/login.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cards',
    component: CardCrudComponent
  },
  {
    path: 'cards/delete/:id',
    component: CardDeleteComponent
  },
  {
    path: 'cards/read',
    component: CardReadComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users/read/:id',
    component: UserReadComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
