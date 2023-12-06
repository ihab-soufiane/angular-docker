import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './Hotels/list/list.component';
import { AjoutComponent } from './Hotels/ajout/ajout.component';
import { ListVoitureComponent } from './Voitures/list-voiture/list-voiture.component';
import { ListVoyageComponent } from './Voyages/list-voyage/list-voyage.component';
import { ListReservationComponent } from './Reservations/list-reservation/list-reservation.component';

import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './User/user/user.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    AjoutComponent,
    ListVoitureComponent,
    ListVoyageComponent,
    ListReservationComponent,
  
    LoginComponent,
    ContactComponent,
    HomeComponent,
    UserComponent,
    AccueilComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
