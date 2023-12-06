import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token:any=localStorage.getItem('token')
 
  constructor(private http:HttpClient) { }
  
  AddHotel(body:any){
    return this.http.post('http://127.0.0.1:3000/api/hotels/addHotel',body)
  }
  gettAllHotel(){
    return this.http.get('http://127.0.0.1:3000/api/hotels')
  }
  updateHotels(id:any,dataHotel:any){
    return this.http.put('http://127.0.0.1:3000/api/hotels/update/' +id,dataHotel)
  }
  getHotelById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/hotels/' +id)
  }
  deleteHotel(id:any){
    return this.http.delete('http://127.0.0.1:3000/api/hotels/' +id)
  }
  AddVoiture(body:any){
    return this.http.post('http://127.0.0.1:3000/api/voitures/addVoiture',body)
  }
  gettAllVoitures(){
    return this.http.get('http://127.0.0.1:3000/api/voitures')
  }
  updateVoiture(id:string,newh:any){
    return this.http.put('http://127.0.0.1:3000/api/voitures/update/'+id,newh)
  }
  getVoitureById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/voiture/'+id)
  }
  deleteVoiture(id:any){
    return this.http.delete('http://127.0.0.1:3000/api/voitures/'+id)
  }
  uploadImage(){
    return this.http.get('http://127.0.0.1:3000/api/upload')
  }
  AddVoyage(body:any){
    return this.http.post('http://127.0.0.1:3000/api/voyages/addVoyage',body)
  }
  gettAllVoyage(){
    return this.http.get('http://127.0.0.1:3000/api/voyages')
  }
  updateVoyages(id:any,dataHotel:any){
    return this.http.put('http://127.0.0.1:3000/api/voyages/update/' +id,dataHotel)
  }
  getVoyageById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/voyages/' +id)
  }
  deleteVoyage(id:any){
    return this.http.delete('http://127.0.0.1:3000/api/voyages/' +id)
  }
  AddReservation(body:any){
    return this.http.post('http://127.0.0.1:3000/api/voyages/addVoyage',body)
  }
  gettAllReservation(){
    return this.http.get('http://127.0.0.1:3000/api/voyages')
  }
  updateReservation(id:any,dataHotel:any){
    return this.http.put('http://127.0.0.1:3000/api/voyages/update/' +id,dataHotel)
  }
  getReservationById(id:any){
    return this.http.get('http://127.0.0.1:3000/api/voyages/' +id)
  }
  deleteReservation(id:any){
    return this.http.delete('http://127.0.0.1:3000/api/voyages/' +id)
  }
  AddContact(body:any){
    return this.http.post('http://127.0.0.1:3000/api/contacts/addContact',body)
  }
  deleteContact(id:any){
    return this.http.delete('http://127.0.0.1:3000/api/contacts/' +id)
  }
  gettAllContact(){
    return this.http.get('http://127.0.0.1:3000/api/contacts')
  }
  register(user:any){
    return this.http.post('http://127.0.0.1:3000/api/users/register',user)
  }
  login(user:any){
    return this.http.post('http://127.0.0.1:3000/api/users/login',user)
  }
  gettAllUsers(){
    return this.http.get('http://127.0.0.1:3000/api/users/')
  }
}
