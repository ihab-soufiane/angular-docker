import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ListContacts:any=[]
 
  dataContact={
    nom:'',
    email:'',
    message:'',
    telephone:'',
    id:'',
  }

  
 
  messageSuccess=''
  constructor(private ds:AdminService,private route:Router) {
   
    this.ds.gettAllContact().subscribe(data=>{
      console.log(data)
      this.ListContacts=data
    })
    
   }

   add(f:any){
    let data=f.value
    // console.log(data)
    this.ds.AddContact(data).subscribe(response=>{
       console.log(response)

      

    })
  }

  

  

  delete(id:any,i:number){

    this.ds.deleteHotel(id).subscribe(response=>{
      console.log(response)
       this.ListContacts.splice(i,1)

    })}
 



  ngOnInit(): void {
  }


}

