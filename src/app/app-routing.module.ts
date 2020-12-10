import { CardCrudComponent } from './views/card-crud/card-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDeleteComponent } from './components/card/card-delete/card-delete.component';
import { CardReadComponent } from './components/card/card-read/card-read.component';



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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
