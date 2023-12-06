import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Listusers:any=[]
 
  dataUser={
    username:'',
    email:'',
   
    id:'',
  }

  
 
  messageSuccess=''
  constructor(private ds:AdminService,private route:Router) {
   
    this.ds.gettAllUsers().subscribe(data=>{
      console.log(data)
      this.Listusers=data
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
       this.Listusers.splice(i,1)

    })}
 



  ngOnInit(): void {
  }


}
