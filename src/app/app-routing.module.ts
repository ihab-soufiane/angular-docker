import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './Hotels/list/list.component';
import { ListVoitureComponent } from './Voitures/list-voiture/list-voiture.component';
import { AjoutComponent } from './Hotels/ajout/ajout.component';
import { HeaderComponent } from './header/header.component';
import { ListVoyageComponent } from './Voyages/list-voyage/list-voyage.component';
import { ListReservationComponent } from './Reservations/list-reservation/list-reservation.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './User/user/user.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'ListHotels',component:ListComponent},
  //{path:'addHotel',component:AjoutComponent},
  {path:'header',component:HeaderComponent},
  {path:'ListVoitures',component:ListVoitureComponent},
  {path:'ListVoyages',component:ListVoyageComponent},
  {path:'ListReservations',component:ListReservationComponent},
  {path:'ListContacts',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'ListUsers',component:UserComponent},
  {path:'accueil',component:AccueilComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
